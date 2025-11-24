import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// POST /api/generate-quiz
router.post("/generate-quiz", async (req, res) => {
  const { title, description, type, count } = req.body;

  try {
    const prompt = `
      Create ${count} ${type} quiz questions for the HTML topic:
      Title: ${title}
      Description: ${description}
      Each question must have exactly 4 options and indicate the correct answer clearly.
      Return as JSON array: 
      [
        { "question": "string", "options": ["opt1","opt2","opt3","opt4"], "correctAnswer": "opt" }
      ]
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const questions = JSON.parse(text);
    res.json({ questions });
  } catch (error) {
    console.error("Error generating quiz:", error);
    res.status(500).json({ error: "Quiz generation failed" });
  }
});

export default router;
