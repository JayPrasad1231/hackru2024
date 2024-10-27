import mongoose from 'mongoose';

const bettingDataSchema = new mongoose.Schema({
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
            },
        },
    ],
    spread: [
        {
            sportsbook: {
                type: String,
                required: true,
            },
            odds: {
                type: String,
                required: true,
            },
            point: {
                type: String,
                required: true,
            },
        },
    ],
});

const BettingData = mongoose.model('BettingData', bettingDataSchema);

export default BettingData
