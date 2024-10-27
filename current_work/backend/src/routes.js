const express = require('express');
const { register, login } = require('./controllers/authController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API! Use /api/register or /api/login.');
  });
  
// Authentication routes
router.post('/register', register);
router.post('/login', login);

module.exports = router;

