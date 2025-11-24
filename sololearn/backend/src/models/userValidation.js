import mongoose from 'mongoose';

const uservalSchema = new mongoose.Schema({
  aadhaarNumber: {
    type: String,
    required: true,
    unique: true,
    match: /^[0-9]{12}$/, // ensure Aadhaar is 12-digit numeric
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  photoBase64: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const UserVal = mongoose.model('UserVal', uservalSchema);

export default UserVal;
