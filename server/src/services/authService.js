const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const authService = {
  register: async ({ name, email, password, tier }) => {
    const existing = await User.findOne({ email });
    if (existing) {
      const err = new Error('User already exists with this email');
      err.statusCode = 400;
      throw err;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      membershipTier: tier || 'Pulse Pro',
    });

    const token = generateToken(user._id);

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        membershipTier: user.membershipTier,
      },
      token,
    };
  },

  login: async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
      const err = new Error('Invalid email or password');
      err.statusCode = 401;
      throw err;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const err = new Error('Invalid email or password');
      err.statusCode = 401;
      throw err;
    }

    const token = generateToken(user._id);

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        membershipTier: user.membershipTier,
      },
      token,
    };
  },
};

module.exports = authService;
