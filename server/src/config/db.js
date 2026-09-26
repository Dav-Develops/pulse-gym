const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pulse-gym';
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.warn('MongoDB connection failed (running in offline mode):', error.message);
  }
};

module.exports = connectDB;
