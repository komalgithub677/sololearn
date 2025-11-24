// // controllers/quizController.js
// import Quiz from "../models/quizModel.js";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// /**
//  * NOTE:
//  * - Requires process.env.GEMINI_API_KEY and a working Google Generative AI SDK setup.
//  * - If the AI output cannot be parsed, we return an error.
//  */

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// /**
//  * POST /api/quiz/generate
//  * Body: { lessonId?, title, description, type = "multiple-choice", count = 5, save = true }
//  * Returns generated quiz and saved DB record (if save = true)
//  */
// export const generateQuiz = async (req, res) => {
//   const { lessonId, title = "", description = "", type = "multiple-choice", count = 5, save = true } = req.body;

//   if (!title && !description) {
//     return res.status(400).json({ error: "Provide title or description for quiz generation." });
//   }

//   try {
//     // build a clearer prompt to help Gemeni return clean JSON
//     const prompt = `
// Generate ${count} ${type} questions for a lesson on the following topic.
// Title: ${title}
// Description: ${description}

// Requirements:
// - Return a JSON array ONLY (no extra commentary).
// - Each item must be an object with keys: "question", "options" (array of 4 strings), "correctAnswer" (one exact option text).
// - Example format:
// [
//   { "question":"Q1?", "options":["A","B","C","D"], "correctAnswer":"B" },
//   ...
// ]
// Produce exactly ${count} objects.
// `;

//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//     const result = await model.generateContent({ content: prompt });
//     // Some SDKs return the text differently; adapt if needed:
//     const rawText = (result?.response?.text && typeof result.response.text === "function")
//       ? result.response.text()
//       : result?.response?.content?.[0]?.text || result?.response || "";

//     let parsed;
//     try {
//       parsed = JSON.parse(rawText);
//       if (!Array.isArray(parsed)) throw new Error("Parsed output is not an array");
//     } catch (err) {
//       console.error("Failed to parse Gemini output:", err.message);
//       console.error("Raw AI output:", rawText);
//       return res.status(500).json({ error: "Failed to parse AI response", rawAI: rawText });
//     }

//     // Validate and normalize
//     const questions = parsed.map((q, idx) => {
//       const question = typeof q.question === "string" ? q.question.trim() : `Question ${idx + 1}`;
//       const options = Array.isArray(q.options) ? q.options.map(opt => String(opt)) : [];
//       const correctAnswer = String(q.correctAnswer || options[0] || "");
//       // Ensure exactly 4 options - if not, try to pad/trim
//       const normalizedOptions = options.slice(0, 4);
//       while (normalizedOptions.length < 4) normalizedOptions.push("Option");
//       return { question, options: normalizedOptions, correctAnswer };
//     });

//     // Save to DB if requested
//     let savedQuiz = null;
//     if (save) {
//       const quizDoc = new Quiz({
//         lessonId,
//         title,
//         description,
//         type,
//         questions,
//       });
//       savedQuiz = await quizDoc.save();
//     }

//     return res.status(201).json({ questions, quiz: savedQuiz });
//   } catch (error) {
//     console.error("generateQuiz error:", error);
//     return res.status(500).json({ error: "Quiz generation failed", details: error.message });
//   }
// };

// /**
//  * GET /api/quiz/:quizId
//  * Returns quiz document
//  */
// export const getQuizById = async (req, res) => {
//   try {
//     const quiz = await Quiz.findById(req.params.quizId);
//     if (!quiz) return res.status(404).json({ error: "Quiz not found" });
//     return res.json(quiz);
//   } catch (error) {
//     console.error("getQuizById error:", error);
//     return res.status(500).json({ error: "Server error" });
//   }
// };

// /**
//  * POST /api/quiz/:quizId/submit
//  * Body: { userId, answers: [optionText,...] }
//  * Returns score and optionally saves results (you can expand to save)
//  */
// export const submitQuiz = async (req, res) => {
//   try {
//     const { answers = [] } = req.body;
//     const quiz = await Quiz.findById(req.params.quizId);
//     if (!quiz) return res.status(404).json({ error: "Quiz not found" });

//     let score = 0;
//     quiz.questions.forEach((q, i) => {
//       if (answers[i] && String(answers[i]).trim() === String(q.correctAnswer).trim()) score++;
//     });

//     return res.json({ score, total: quiz.questions.length });
//   } catch (error) {
//     console.error("submitQuiz error:", error);
//     return res.status(500).json({ error: "Server error" });
//   }
// };
// controllers/quizController.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateQuiz = async (req, res) => {
  const { title, description, type, count } = req.body;

  if (!title || !description || !type || !count) {
    return res.status(400).json({ error: "Missing required fields" });
  }

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

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    let questions;
    try {
      questions = JSON.parse(text);
    } catch (parseError) {
      return res.status(500).json({
        error: "Gemini returned invalid JSON",
        raw: text
      });
    }

    res.json({ questions });
  } catch (error) {
    console.error("Quiz generation failed:", error);
    res.status(500).json({ error: "Quiz generation failed" });
  }
};
