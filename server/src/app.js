const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// API Base Routes
app.get('/', (req, res) => {
  res.json({ message: 'Pulse Performance Gym API is running' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);

// Trial Pass Endpoint
app.post('/api/trial-pass', (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required for 7-day pass' });
  }
  // Store or process trial pass request
  res.json({
    success: true,
    message: '7-Day Pass activated! Check your inbox for your pass barcode.',
    lead: { name, email, phone, message, date: new Date() },
  });
});

// Class Bookings Endpoint
app.post('/api/bookings', (req, res) => {
  const { name, email, classTitle, classTime } = req.body;
  if (!classTitle || !classTime) {
    return res.status(400).json({ message: 'Class title and time slot are required' });
  }
  res.json({
    success: true,
    message: `Class reservation confirmed for ${classTitle}!`,
    booking: { name, email, classTitle, classTime, id: `BOOK-${Date.now()}` },
  });
});

module.exports = app;
