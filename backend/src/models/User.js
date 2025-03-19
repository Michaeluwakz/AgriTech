import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  role: {
    type: String,
    enum: ['farmer', 'retailer', 'consumer', 'admin'],
    default: 'consumer'
  },
  fullName: {
    type: String,
    required: [true, 'Full name is required']
  }
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);