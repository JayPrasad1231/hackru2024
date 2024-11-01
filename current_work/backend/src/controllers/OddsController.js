import axios, { spread } from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import BettingData from '../models/Odds.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

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

        // console.log(response.data);
        for (let i in response.data) {
            const game = response.data[i];
            const bookmakers = Object.values(game.bookmakers);
            const home_team = game.home_team;
            const away_team = game.away_team;
            games.push(new Tuple(home_team, away_team));
        
            // Initialize maps for teams if not already done
            if (!h2hMapNFL.has(home_team)) h2hMapNFL.set(home_team, []);
            if (!h2hMapNFL.has(away_team)) h2hMapNFL.set(away_team, []);
            if (!spreadMapNFL.has(home_team)) spreadMapNFL.set(home_team, []);
            if (!spreadMapNFL.has(away_team)) spreadMapNFL.set(away_team, []);
            // if (!overMapNFL.has(home_team)) overMapNFL.set(home_team, []);
            // if (!overMapNFL.has(away_team)) overMapNFL.set(away_team, []);
        
            for (let j in bookmakers) {
                const bookmaker = bookmakers[j];
                const sportsbook = bookmaker.title;
                const markets = bookmaker.markets;
                
                for (let k in markets) {
                    const market = markets[k];
                    const outcomes = market.outcomes;
        
                    if (market.key === 'h2h') {
                        for (let l in outcomes) {
                            const outcome = outcomes[l];
                            const team = outcome.name;
                            const price = outcome.price;
                            h2hMapNFL.get(team).push(new Tuple(sportsbook, price)); // Use .get() method
                        }
                    }
        
                    if (market.key === 'spreads') {
                        console.log("hey");
                        for (let l in outcomes) {
                            const outcome = outcomes[l];
                            const team = outcome.name;
                            const price = outcome.price;
                            const point = outcome.point;
                            spreadMapNFL.get(team).push(new Triple(sportsbook, price, point)); // Use .get() method
                        }
                    }
        
                    // if (market.key === 'totals') {
                    //     for (let l in outcomes) {
                    //         const outcome = outcomes[l];
                    //         console.log(outcome);
                    //         const team = outcome.name;
                    //         console.log(team)
                    //         console.log(home_team)
                    //         console.log(away_team)
                    //         const price = outcome.price;
                    //         const point = outcome.point;
                    //         overMapNFL.get(team).push(new Triple(sportsbook, price, point)); // Use .get() method
                    //     }
                    // }
                }
            }
        }
        console.log(spreadMapNFL);

        const saved_data_h2h = new Map();
        // const saved_data_total = new Map();
        const saved_data_spread = new Map();

        function getBestThreeOddsH2H(oddsArray) {
            // Sort the array based on the price, converting American odds to a comparable number
            const sortedOdds = oddsArray.map(element => {
                const sportsbook = element.get(0); // First element: sportsbook
                const price = element.get(1); // Second element: price (in American odds)
        
                // Convert American odds to decimal for sorting
                const decimalOdds = price > 0 ? (price / 100) + 1 : (100 / Math.abs(price)) + 1;
                return { element, decimalOdds }; // Store the original element for output
            }).sort((a, b) => b.decimalOdds - a.decimalOdds); // Sort in descending order
        
            // Extract the top three elements
            const bestThree = sortedOdds.slice(0, 3).map(item => item.element); // Get the original tuples/triples
        
            return bestThree;
        }

        function getBestThreeOddsSpread(oddsArray) {
            // Sort the array based on the price, converting American odds to a comparable number
            const sortedOdds = oddsArray.map(element => {
                const sportsbook = element.get(0); // First element: sportsbook
                const price = element.get(1); // Second element: price (in American odds)
                const point = element.get(2);
        
                // Convert American odds to decimal for sorting
                const decimalOdds = price > 0 ? (price / 100) + 1 : (100 / Math.abs(price)) + 1;
                return { element, decimalOdds, point }; // Store the original element for output
            }).sort((a, b) => b.decimalOdds - a.decimalOdds); // Sort in descending order
        
            // Extract the top three elements
            const bestThree = sortedOdds.slice(0, 3).map(item => item.element); // Get the original tuples/triples
        
            return bestThree;
        }

        games.forEach(tuple => {
            const home_team = tuple.get(0);
            const away_team = tuple.get(1);

            // Moneylines
            const home_team_best3BooksH2H = getBestThreeOddsH2H(h2hMapNFL.get(home_team));
            saved_data_h2h.set(home_team, home_team_best3BooksH2H);
            const away_team_best3BooksH2H = getBestThreeOddsH2H(h2hMapNFL.get(away_team));
            saved_data_h2h.set(away_team, away_team_best3BooksH2H);
            
            // Over/Unders or Totals
            // const home_team_best3BooksTotal = getBestThreeOdds(overMapNFL.get(home_team) || []);
            // saved_data_total.set(home_team, home_team_best3BooksTotal);
            // const away_team_best3BooksTotal = getBestThreeOdds(overMapNFL.get(away_team) || []);
            // saved_data_total.set(away_team, away_team_best3BooksTotal);

            // Spreads
            const home_team_best3BooksSpread = getBestThreeOddsSpread(spreadMapNFL.get(home_team) || []);
            saved_data_spread.set(home_team, home_team_best3BooksSpread);
            // console.log(home_team_best3BooksSpread);
            const away_team_best3BooksSpread = getBestThreeOddsSpread(spreadMapNFL.get(away_team) || []);
            saved_data_spread.set(away_team, away_team_best3BooksSpread);
        });

        const bettingDataArray = [];

        games.forEach(tuple => {
            const home_team = tuple.get(0);
            // console.log("heyheyhey")
            const away_team = tuple.get(1);
            const homeTeamData = {
                teamName: home_team,
                h2h: saved_data_h2h.get(home_team) || [],
                // total: saved_data_total.get(home_team) || [],
                spread: saved_data_spread.get(home_team) || []
            };

            const awayTeamData = {
                teamName: away_team,
                h2h: saved_data_h2h.get(away_team) || [],
                // total: saved_data_total.get(away_team) || [],
                spread: saved_data_spread.get(away_team) || []
            };

            bettingDataArray.push(homeTeamData, awayTeamData);
        });
        res.status(200).json(bettingDataArray);
    } catch (error) {
        console.error('Error fetching odds data:', error); // Update error message
        res.status(500).json({ error: 'Failed to fetch odds data' }); // Correct error response
    }
};