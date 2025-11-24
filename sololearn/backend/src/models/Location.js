import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  ip: { type: String },
  city: { type: String },
  region: { type: String },
  country: { type: String }, 
  isp: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  userId: { type: String },
  email: { type: String },
  assessmentId: { type: String }, 
}, {
  timestamps: true 
});

const Location = mongoose.model("Location", locationSchema);

export default Location;
