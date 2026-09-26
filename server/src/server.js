require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Attempt database connection
connectDB();

app.listen(PORT, () => {
  console.log(`Pulse Performance Gym server running on port ${PORT}`);
});
