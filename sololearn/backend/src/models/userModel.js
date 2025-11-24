import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  streak:{
  lastActiveDate: {
    type: Date,
    default: Date.now,
    required: true,
  },

  currentStreak: {
    type: Number,
    default: 0,
  },

  longestStreak: {
    type: Number,
    default: 0,
  },

  streakSaversUsed: {
    type: Number,
    default: 0
  },

  lastStreakSaverDate:{
    type:Date,
    default: null
  }
},

  progress: [
    {
      courseId: {
        type: String, // e.g., "html", "css", "javascript"
        required: true,
      },
      completedLessons: [
        {
          chapterId: Number,
          lessonId: Number,
        },
      ],
    },
  ],

  screenshotAttempts: [
  {
  timestamp: { type: Date, default: Date.now },
  reason: { type: String, default: "Unknown" },
  },
],
});

const User = mongoose.model("Login", userSchema);

export default User;