import Video from "../models/Video.js";

export const uploadVideo = async (req, res) => {
  try {
    const { file } = req;
    const video = new Video(file);
    await video.save();
    res.status(200).json({ message: "✅ Video uploaded", video });
  } catch (err) {
    res.status(500).json({ message: "❌ Upload failed", error: err.message });
  }
};
