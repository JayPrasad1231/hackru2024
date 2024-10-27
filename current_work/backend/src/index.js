import express from 'express';
import { connectDB } from './config.js'; // Ensure to add .js extension
import routes from './routes.js'; // Ensure to add .js extension

console.log("hey");

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
