import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import quizRoutes from "./routes/quiz.js"; // ✅ import your route
import indexRouter from "./routes/index.js"; // ✅ import main API routes

dotenv.config();
const app = express();

// 🔍 Debug environment variables
console.log("🔍 Environment Variables Debug:");
console.log("📁 .env file loaded:", process.env.NODE_ENV);
console.log("🔑 GEMINI_API_KEY exists:", !!process.env.GEMINI_API_KEY);
console.log("🗄️ MONGODB_URI exists:", !!process.env.MONGODB_URI);
console.log("🗄️ MONGODB_URI value:", process.env.MONGODB_URI ? "***" + process.env.MONGODB_URI.slice(-20) : "undefined");
console.log("🌐 PORT:", process.env.PORT || "default 3000");

app.use(cors());
app.use(express.json());

// ✅ MONGO connection
console.log("🔧 Attempting MongoDB connection...");
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI is not defined in environment variables");
  console.error("❌ Please check your .env file");
  console.log("⚠️ Continuing without MongoDB for quiz functionality...");
  // process.exit(1); // Commented out temporarily
} else {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("✅ MongoDB connected successfully"))
    .catch(err => {
      console.error("❌ MongoDB connection error:", err.message);
      console.error("❌ Error details:", err);
      // Don't exit, let the server continue for quiz functionality
    });
}

// ✅ use routes
console.log("🔧 Mounting quiz routes at /api/quiz");
try {
  console.log("📁 Quiz routes file path:", "./routes/quiz.js");
  console.log("📁 Current directory:", process.cwd());
  app.use("/api/quiz", quizRoutes); // ✅ MOUNT ROUTES HERE
  console.log("✅ Quiz routes mounted successfully");
} catch (error) {
  console.error("❌ Error mounting quiz routes:", error);
  console.error("❌ Error details:", error.message);
  console.error("❌ Error stack:", error.stack);
}

// ✅ Mount main API routes (login, signup, etc.)
console.log("🔧 Mounting main API routes at /api");
try {
  app.use("/api", indexRouter); // ✅ MOUNT MAIN API ROUTES
  console.log("✅ Main API routes mounted successfully");
} catch (error) {
  console.error("❌ Error mounting main API routes:", error);
  console.error("❌ Error details:", error.message);
  console.error("❌ Error stack:", error.stack);
}

// ✅ basic test
app.get("/", (req, res) => {
  res.send("Server is running");
});

// 🧪 Test route to verify quiz routes are working
app.get("/api/quiz/test", (req, res) => {
  res.json({ message: "Quiz routes are accessible from main app", timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
