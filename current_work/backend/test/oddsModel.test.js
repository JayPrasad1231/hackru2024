const assert = require('assert'); // Use CommonJS require
const OddsModel = require('../src/models/Odds'); // Adjust the path as needed

describe('OddsModel', () => {
    it('should save odds correctly', async () => {
        const oddsData = {
            teamName: 'Team A',
            h2h: [{ sportsbook: 'Bookie A', odds: 150 }],
            total: [{ sportsbook: 'Bookie B', odds: 200 }],
            spread: [{ sportsbook: 'Bookie C', odds: -120 }],
        };

        const odds = new OddsModel(oddsData);
        const savedOdds = await odds.save();

        assert.strictEqual(savedOdds.teamName, 'Team A');
        assert.strictEqual(savedOdds.h2h[0].sportsbook, 'Bookie A');
        assert.strictEqual(savedOdds.total[0].odds, 200);
    });
});
