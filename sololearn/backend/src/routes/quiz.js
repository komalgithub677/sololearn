// 📁 backend/routes/quiz.js

import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
// import Quiz from "../models/Quiz.js"; // Temporarily commented out for debugging

dotenv.config();
const router = express.Router();

// ✅ Gemini AI setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 🧪 Test route to verify mounting
router.get("/test", (req, res) => {
  res.json({ message: "Quiz routes are working!", timestamp: new Date().toISOString() });
});

// 🚀 Route: Generate Quiz using Gemini
router.post("/", async (req, res) => {
  const { topic } = req.body;

  console.log("🎯 Quiz generation request received for topic:", topic);

  if (!topic || topic.trim() === "") {
    console.log("❌ Topic validation failed");
    return res.status(400).json({ error: "⚠️ Topic is required" });
  }

  try {
    console.log("🔑 Using Gemini API key:", process.env.GEMINI_API_KEY ? "✅ Present" : "❌ Missing");
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    console.log("🤖 Gemini model initialized successfully");

    const prompt = `Generate 5 multiple choice questions with 4 options each on the topic: "${topic}". Return the output as a JSON array:
  [
    {
      "question": "What is ...?",
      "options": ["A", "B", "C", "D"],
      "answer": "Correct Option"
    }
  ]
  Strictly return only the JSON.`;

    console.log("📝 Sending prompt to Gemini...");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    const cleanedText = text.trim();

    console.log("🌐 Gemini Raw Output:\n", cleanedText); // Debug

    // Try to extract a valid JSON array using regex
    const match = cleanedText.match(/\[\s*{[\s\S]*}\s*]/);
    if (!match) {
      console.error("❌ Failed to parse Gemini output:", cleanedText);
      return res.status(500).json({ error: "❌ Invalid JSON from Gemini." });
    }

    const questions = JSON.parse(match[0]);
    console.log("✅ Successfully parsed questions:", questions.length);

    if (!Array.isArray(questions)) {
      return res.status(500).json({ error: "❌ Gemini response was not an array." });
    }

    console.log("🎉 Quiz generation successful!");
    res.json({ questions });
  } catch (err) {
    console.error("❌ Gemini API Error:", err.message);
    console.error("❌ Full error:", err);
    res.status(500).json({ error: "Gemini API failed. Try again." });
  }
});

// 🚀 Route: Save Quiz to MongoDB
// router.post("/submit-quiz", async (req, res) => {
//   const { topic, questions } = req.body;

//   if (!topic || !Array.isArray(questions) || questions.length === 0) {
//     return res.status(400).json({ error: "⚠️ topic and valid questions are required." });
//   }

//   try {
//     const savedQuiz = await Quiz.create({ topic, questions });
//     res.json({
//       message: "✅ Quiz saved successfully!",
//       quizId: savedQuiz._id,
//     });
//   } catch (err) {
//     console.error("❌ MongoDB Error:", err.message);
//     res.status(500).json({ error: "❌ Failed to save quiz" });
//   }
// });

export default router;
