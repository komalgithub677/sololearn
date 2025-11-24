import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import UserVal from "../models/userValidation.js";
import fetch from 'node-fetch';
import multer from 'multer';

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      progress: [],
    });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ message: "Error creating user", error: error.message });
  }
};

// Get user details by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "Error fetching user", error: error.message });
  }
};

// Update user information
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error: error.message });
  }
};

// SignIn function
export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

// Streak initialization and tracking
    // Inside your login route (assuming user is authenticated)
    // Use Indian Standard Time
    const now = new Date();
    const istNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const today = new Date(istNow.getFullYear(), istNow.getMonth(), istNow.getDate());

    if (!user.streak || !user.streak.lastActiveDate) {
      user.streak = {
        currentStreak: 1,
        longestStreak: 1,
        lastActiveDate: today,
        streakSaversUsed: 0,
        lastStreakSaverDate: null,
      };
    } else {
      const last = new Date(user.streak.lastActiveDate);
      const lastDate = new Date(last.getFullYear(), last.getMonth(), last.getDate());
      const diffInDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));

      // Check if streak saver was used for this missed day
      const lastSaverDate = user.streak.lastStreakSaverDate ? new Date(user.streak.lastStreakSaverDate) : null;
      const saverUsedForCurrentBreak = lastSaverDate &&
        lastSaverDate.getFullYear() === today.getFullYear() &&
        lastSaverDate.getMonth() === today.getMonth() &&
        lastSaverDate.getDate() === today.getDate();

      if (diffInDays === 0) {
        // Same day login - do nothing
      } else if (diffInDays === 1) {
        // Continued streak normally
        user.streak.currentStreak += 1;
      } else if (diffInDays === 2) {
        // Missed exactly 1 day — check if streak saver used
        if (!saverUsedForCurrentBreak) {
          // No streak saver used yet - break streak
          user.streak.currentStreak = 1;
          user.streak.streakSaversUsed = 0;
          user.streak.lastStreakSaverDate = null;
        }
        // If saver used for this break, keep currentStreak as is
      } else if (diffInDays > 2) {
        // Missed more than 1 day - break streak completely
        user.streak.currentStreak = 1;
        user.streak.streakSaversUsed = 0;
        user.streak.lastStreakSaverDate = null;
      }

      // Update longest streak
      user.streak.longestStreak = Math.max(user.streak.longestStreak, user.streak.currentStreak);

      // Update lastActiveDate only if it's a new day
      if (diffInDays > 0) {
        user.streak.lastActiveDate = today;
      }
    }

    await user.save();

    res.status(200).json({
      success: true,
      userId: user._id.toString(),
      user: {
        name: user.name,
        email: user.email,
        progress: user.progress,
        streak: user.streak,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// Streak Saver usage route
export const useStreakSaver = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const now = new Date();
    const istNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const today = new Date(istNow.getFullYear(), istNow.getMonth(), istNow.getDate());

    if (!user.streak || !user.streak.lastActiveDate) {
      return res.status(400).json({ message: "No streak to save" });
    }

    const last = new Date(user.streak.lastActiveDate);
    const lastDate = new Date(last.getFullYear(), last.getMonth(), last.getDate());
    const diffInDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));

    if (diffInDays !== 2) {
      return res.status(400).json({ message: "Streak Saver can only be used after missing exactly 1 day" });
    }

    const lastSaverDate = user.streak.lastStreakSaverDate ? new Date(user.streak.lastStreakSaverDate) : null;
    const saverUsedForCurrentBreak = lastSaverDate &&
      lastSaverDate.getFullYear() === today.getFullYear() &&
      lastSaverDate.getMonth() === today.getMonth() &&
      lastSaverDate.getDate() === today.getDate();

    if (saverUsedForCurrentBreak) {
      return res.status(400).json({ message: "Streak Saver already used for this missed day" });
    }

    if (user.streak.streakSaversUsed >= 3) {
      return res.status(400).json({ message: "No streak savers available" });
    }

    // Use streak saver - keep streak alive
    user.streak.streakSaversUsed += 1;
    user.streak.lastStreakSaverDate = today;
    user.streak.lastActiveDate = today; // update last active to today

    await user.save();

    res.status(200).json({
      message: "Streak Saver used successfully",
      streak: user.streak,
    });
  } catch (error) {
    console.error("Streak Saver error:", error);
    res.status(500).json({ message: "Error using Streak Saver", error: error.message });
  }
};

// Save course progress
export const saveProgress = async (req, res) => {
  const { userId, courseId, chapterId, lessonId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    let courseProgress = user.progress.find((p) => p.courseId === courseId);
    if (!courseProgress) {
      courseProgress = { courseId, completedLessons: [] };
      user.progress.push(courseProgress);
    }
    if (
      !courseProgress.completedLessons.some(
        (l) => l.chapterId === chapterId && l.lessonId === lessonId
      )
    ) {
      courseProgress.completedLessons.push({ chapterId, lessonId });
    }
    await user.save();
    res.status(200).json({ message: "Progress saved successfully", progress: user.progress });
  } catch (error) {
    res.status(500).json({ message: "Error saving progress", error: error.message });
  }
};

// Get course progress
export const getProgress = async (req, res) => {
  const { userId, courseId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const courseProgress = user.progress.find((p) => p.courseId === courseId) || {
      courseId,
      completedLessons: [],
    };
    res.status(200).json(courseProgress);
  } catch (error) {
    res.status(500).json({ message: "Error fetching progress", error: error.message });
  }
};

// Get leaderboard data
export const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find({}, 'name email progress');
    const leaderboard = users.map(user => {
      const totalXP = user.progress.reduce((sum, course) => {
        return sum + (course.completedLessons.length * 10); // 10 XP per lesson
      }, 0);
      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        totalXP,
        totalLessons: user.progress.reduce((sum, course) => sum + course.completedLessons.length, 0),
      };
    });
    // Sort by totalXP in descending order
    leaderboard.sort((a, b) => b.totalXP - a.totalXP);
    // Assign ranks
    const rankedLeaderboard = leaderboard.map((user, index) => ({
      ...user,
      rank: index + 1,
    }));
    res.status(200).json(rankedLeaderboard);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leaderboard", error: error.message });
  }
};



//Aadhaar registering
export const registerAadhaar = async (req, res) => {
  const { aadhaarNumber, name } = req.body;
  const file = req.file;

  if (!aadhaarNumber || !name || !file) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const existing = await UserVal.findOne({ aadhaarNumber });
  if (existing) {
    return res.status(409).json({ message: 'Aadhaar already registered' });
  }

  const photoBase64 = file.buffer.toString('base64');

  const user = new UserVal({
    aadhaarNumber,
    name,
    photoBase64,
  });

  await user.save();
  res.status(201).json({ message: 'User registered successfully' });
};


//Aadhaar Validation
export const verifyAadhaarUser = async (req, res) => {
  const { aadhaarNumber } = req.body;
  const file = req.file;

  if (!aadhaarNumber || !file) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const user = await UserVal.findOne({ aadhaarNumber });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const storedPhoto = user.photoBase64;
  const capturedPhoto = file.buffer.toString('base64');

  const faceRes = await fetch('https://api-us.faceplusplus.com/facepp/v3/compare', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      api_key: process.env.FACE_API_KEY,
      api_secret: process.env.FACE_API_SECRET,
      image_base64_1: storedPhoto,
      image_base64_2: capturedPhoto,
    })
  });

  const faceData = await faceRes.json();

  if (faceData.confidence && faceData.confidence > 80) {
    res.json({ success: true, message: '✅ Face match successful' });
  } else {
    res.status(401).json({ success: false, message: '❌ Face does not match' });
  }
};

