import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  mimetype: String,
  size: Number,
  path: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Video", videoSchema);
