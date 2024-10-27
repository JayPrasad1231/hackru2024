import express from 'express';
// import { register, login } from './controllers/authController.js'; // Ensure to add .js extension
import { fetchOddsData } from './controllers/OddsController.js'; // Ensure to add .js extension

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API! Use /api/register or /api/login.');
});

// Odds data route
router.get('/fetch_odds', fetchOddsData); // Add this line

export default router;