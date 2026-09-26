const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    membershipTier: {
      type: String,
      default: 'Pulse Pro',
      enum: ['Basic Access', 'Pulse Pro', 'Ultimate VIP'],
    },
    bookedClasses: [
      {
        classTitle: String,
        classTime: String,
        bookedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
