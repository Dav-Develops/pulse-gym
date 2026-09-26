const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const { name, email, password, tier } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }
    const result = await authService.register({ name, email, password, tier });
    res.status(201).json(result);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message || 'Server error during registration' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    const result = await authService.login({ email, password });
    res.json(result);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message || 'Server error during login' });
  }
};

exports.getMe = async (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving user' });
  }
};
