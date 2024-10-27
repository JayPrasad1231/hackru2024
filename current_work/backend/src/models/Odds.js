import mongoose from 'mongoose';

const oddsSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
    },
    h2h: [
        {
            sportsbook: {
                type: String,
                required: true,
            },
            odds: {
                type: Number,
                required: true,
            }
        }
    ],
    total: [
        {
            sportsbook: {
                type: String,
                required: true,
            },
            odds: {
                type: Number,
                required: true,
            }
        }
    ],
    spread: [
        {
            sportsbook: {
                type: String,
                required: true,
            },
            odds: {
                type: Number,
                required: true,
            }
        }
    ]
});

const OddsModel = mongoose.model('Odds', oddsSchema);

// Use default export
export default OddsModel;
