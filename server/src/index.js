// server/src/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000; // Use environment port or default to 5000

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// MongoDB Atlas connection
const mongoURI = process.env.MONGODB_URI; // Your MongoDB connection string
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// A simple route to test server communication
app.get('/', (req, res) => {
  res.send('Hello, World! The server is running and connected to MongoDB.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





