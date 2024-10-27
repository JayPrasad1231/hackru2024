import express from 'express';
import { connectDB } from './config.js'; // Ensure to add .js extension
import routes from './routes.js'; // Ensure to add .js extension
import cors from 'cors';

console.log("hey");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the API! Use /api/register or /api/login.');
});

app.use('/api', routes);



connectDB(); // Call the connectDB function here
console.log(process.env.PORT);

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
