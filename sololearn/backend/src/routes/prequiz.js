// backend/routes/preQuiz.js

import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import preQuiz from "../models/preQuiz.js";

dotenv.config();
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ FIXED: Now listens on /api/generate-quiz
router.post("/api/generate-quiz", async (req, res) => {
  const { topic } = req.body;

  if (!topic || topic.trim() === "") {
    return res.status(400).json({ error: "⚠️ Topic is required" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"
});

    const prompt = `Generate 5 multiple choice questions with 4 options each on the topic: "${topic}". Return the output as a JSON array:
    [
      {
        "question": "What is ...?",
        "options": ["A", "B", "C", "D"],
        "answer": "Correct Option"
      }
    ]
    Strictly return only the JSON.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    const cleanedText = text.trim();

    console.log("🌐 Gemini Raw Output:\n", cleanedText);

    const match = cleanedText.match(/\[\s*{[\s\S]*}\s*]/);
    if (!match) {
      console.error("❌ Failed to parse Gemini output:", cleanedText);
      return res.status(500).json({ error: "❌ Invalid JSON from Gemini." });
    }

    const questions = JSON.parse(match[0]);

    if (!Array.isArray(questions)) {
      return res.status(500).json({ error: "❌ Gemini response was not an array." });
    }

    res.json({ questions }); // ✅ This matches frontend expectation
  } catch (err) {
    console.error("❌ Gemini API Error:", err.message);
    res.status(500).json({ error: "Gemini API failed. Try again." });
  }
});

// Keep this for saving quiz
router.post("/submit-quiz", async (req, res) => {
  const { topic, questions } = req.body;

  if (!topic || !Array.isArray(questions) || questions.length === 0) {
    return res.status(400).json({ error: "⚠️ topic and valid questions are required." });
  }

  try {
    const savedQuiz = await preQuiz.create({ topic, questions });
    res.json({
      message: "✅ Quiz saved successfully!",
      quizId: savedQuiz._id,
    });
  } catch (err) {
    console.error("❌ MongoDB Error:", err.message);
    res.status(500).json({ error: "❌ Failed to save quiz" });
  }
});

export default router;