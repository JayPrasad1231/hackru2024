const express = require('express');
const { connectDB, closeDB } = require('./config');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the API! Use /api/register or /api/login.');
});

app.use('/api', routes);

connectDB(); // Call the connectDB function here

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
