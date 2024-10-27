// import express from 'express';
// import dotenv from 'dotenv';
// import routes from './routes.js'; // Use .js extension
// import connectDB from './db.js'; // Import the connectDB function

// dotenv.config(); // Load environment variables from .env file

// const app = express();
// const PORT = process.env.PORT || 3000; // Default port is 3000

// console.log("Mongo URI:", process.env.MONGO_URI);

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Connect to MongoDB using the connectDB function
// connectDB();

// // Use routes
// app.use('/api', routes); // Prefix all routes with /api

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
