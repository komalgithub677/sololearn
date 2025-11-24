// routes/index.js
import express from "express";
import videoRoutes from "./videoRoutes.js";
import locationRoutes from "./locationRoutes.js";
import aiRoutes from "./aiRoutes.js";
import quizRoutes from "./quizRoutes.js";
import {
  createUser,
  getUserById,
  updateUser,
  signIn,
  saveProgress,
  getProgress,
  getLeaderboard,
  useStreakSaver,
  registerAadhaar,
  verifyAadhaarUser
} from "../controllers/userController.js";
import multer from "multer";
import User from "../models/userModel.js";
import preQuiz from "../models/preQuiz.js";
import bcrypt from "bcrypt";

const router = express.Router();
const upload = multer();

// Sub-Routes
router.use("/videos", videoRoutes);
router.use("/location", locationRoutes);
router.use("/generate-question", aiRoutes); 
router.use("/quiz", quizRoutes);

// Models
router.use("/generate-preQuiz", preQuiz);

// User Routes
router.post("/users", createUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);

// Aadhaar
router.post("/register", upload.single("photo"), registerAadhaar);
router.post("/kyc", upload.single("selfie"), verifyAadhaarUser);

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      progress: [],
      streak: {
        currentStreak: 1,
        longestStreak: 1,
        streakSaversUsed: 0,
        lastActiveDate: new Date(),
      },
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});

// Screenshot logging
router.post("/screenshot-attempt", async (req, res) => {
  const { userId, timestamp, reason } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    user.screenshotAttempts.push({
      timestamp: timestamp || new Date(),
      reason: reason || "Unknown",
    });

    await user.save();
    res.status(200).json({ success: true, message: "Attempt logged" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Auth & Learning
router.post("/login", signIn);
router.post("/progress", saveProgress);
router.get("/progress/:userId/:courseId", getProgress);
router.get("/leaderboard", getLeaderboard);
router.post("/streak-saver", useStreakSaver);

export default router;
