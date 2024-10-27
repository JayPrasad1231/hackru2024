import axios from 'axios';
import BettingData from '../models/Odds.js';

class Tuple {
    constructor(first, second) {
        this.first = first; // Store the first element
        this.second = second; // Store the second element
    }

    get(index) {
        if (index === 0) {
            return this.first;
        } else if (index === 1) {
            return this.second;
        } else {
            throw new Error('Index out of bounds. Tuple only has two elements.');
        }
    }
}

class Triple {
    constructor(first, second, third) {
        this.first = first; // Store the first element
        this.second = second; // Store the second element
        this.third = third;
    }

    get(index) {
        if (index === 0) {
            return this.first;
        } else if (index === 1) {
            return this.second;
        } else if (index === 2) {
            return this.third;
        } else {
            throw new Error('Index out of bounds. Triple only has three elements.');
        }
    }
}

export const fetchOddsData = async (req, res) => {
    try {
        console.log("howdy");
        const apiKey = process.env.ODDS_API_KEY; // Ensure you store your API key in .env
        const url = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads,totals&oddsFormat=american`;
        const response = await axios.get(url);

        const games = [];
        const h2hMapNFL = new Map();
        const spreadMapNFL = new Map();
        const overMapNFL = new Map();

        response.data.forEach(game => {
            const bookmakers = game.bookmakers;
            console.log(bookmakers);
            const home_team = game.home_team;
            const away_team = game.away_team;
            games.push(new Tuple(home_team, away_team));

            // Initialize maps for teams if not already done
            if (!h2hMapNFL.has(home_team)) h2hMapNFL.set(home_team, []);
            if (!h2hMapNFL.has(away_team)) h2hMapNFL.set(away_team, []);
            
            bookmakers.forEach(bookmaker => {
                const sportsbook = bookmaker.title;
                const markets = bookmaker.markets;

                markets.forEach(market => {
                    const outcomes = market.outcomes;

                    if (market.key === 'h2h') {
                        outcomes.forEach(outcome => {
                            const team = outcome.name;
                            const price = outcome.price;
                            h2hMapNFL.get(team).push(new Tuple(sportsbook, price)); // Use .get() method
                        });
                    }

                    if (market.key === 'spread') {
                        outcomes.forEach(outcome => {
                            const team = outcome.name;
                            const price = outcome.price;
                            const point = outcome.point;
                            spreadMapNFL.get(team).push(new Triple(sportsbook, price, point)); // Use .get() method
                        });
                    }

                    if (market.key === 'totals') {
                        outcomes.forEach(outcome => {
                            const team = outcome.name;
                            const price = outcome.price;
                            const point = outcome.point;
                            overMapNFL.get(team).push(new Triple(sportsbook, price, point)); // Use .get() method
                        });
                    }
                });
            });
        });

        const saved_data_h2h = new Map();
        const saved_data_total = new Map();
        const saved_data_spread = new Map();

        games.forEach(tuple => {
            const home_team = tuple.get(0);
            const away_team = tuple.get(1);

            // Moneylines
            const home_team_best3BooksH2H = getBestThreeOdds(h2hMapNFL.get(home_team));
            saved_data_h2h.set(home_team, home_team_best3BooksH2H);
            const away_team_best3BooksH2H = getBestThreeOdds(h2hMapNFL.get(away_team));
            saved_data_h2h.set(away_team, away_team_best3BooksH2H);
            
            // Over/Unders or Totals
            const home_team_best3BooksTotal = getBestThreeOdds(overMapNFL.get(home_team) || []);
            saved_data_total.set(home_team, home_team_best3BooksTotal);
            const away_team_best3BooksTotal = getBestThreeOdds(overMapNFL.get(away_team) || []);
            saved_data_total.set(away_team, away_team_best3BooksTotal);

            // Spreads
            const home_team_best3BooksSpread = getBestThreeOdds(spreadMapNFL.get(home_team) || []);
            saved_data_spread.set(home_team, home_team_best3BooksSpread);
            const away_team_best3BooksSpread = getBestThreeOdds(spreadMapNFL.get(away_team) || []);
            saved_data_spread.set(away_team, away_team_best3BooksSpread);
        });

        const bettingDataArray = [];

        games.forEach(tuple => {
            const home_team = tuple.get(0);
            const away_team = tuple.get(1);

            const homeTeamData = {
                teamName: home_team,
                h2h: saved_data_h2h.get(home_team) || [],
                total: saved_data_total.get(home_team) || [],
                spread: saved_data_spread.get(home_team) || []
            };

            const awayTeamData = {
                teamName: away_team,
                h2h: saved_data_h2h.get(away_team) || [],
                total: saved_data_total.get(away_team) || [],
                spread: saved_data_spread.get(away_team) || []
            };

            bettingDataArray.push(homeTeamData, awayTeamData);
        });

        async function saveBettingData(bettingDataArray) {
            for (const data of bettingDataArray) {
                const bettingData = new BettingData({
                    teamName: data.teamName,
                    h2h: data.h2h,
                    total: data.total,
                    spread: data.spread
                });

                try {
                    await bettingData.save();
                    console.log(`Data saved successfully for ${data.teamName}`);
                } catch (error) {
                    console.error(`Error saving data for ${data.teamName}:`, error);
                }
            }
        }

        await saveBettingData(bettingDataArray); // Await the saving process
        res.status(200).json({ message: 'Betting data saved successfully!' }); // Send a response back
    } catch (error) {
        console.error('Error fetching odds data:', error); // Update error message
        res.status(500).json({ error: 'Failed to fetch odds data' }); // Correct error response
    }
};