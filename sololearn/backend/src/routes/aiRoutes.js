// // routes/aiRoutes.js
// import express from 'express';
// import dotenv from 'dotenv';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// dotenv.config();
// const router = express.Router();

// const apiKey = process.env.GEMINI_API_KEY;
// if (!apiKey) throw new Error('❌ Missing GEMINI_API_KEY in .env');

// const genAI = new GoogleGenerativeAI(apiKey);
// const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// router.post('/', async (req, res) => {
//   const { lessonContent } = req.body;

//   if (!lessonContent) {
//     return res.status(400).json({ error: 'lessonContent is required' });
//   }

//   const prompt = `
// You are a professional Python instructor.
// Generate 6 well-formatted multiple choice questions based on the following lesson:

// """
// ${lessonContent}
// """

// Each question must include:
// - A clear question
// - Four answer options (a), (b), (c), (d)
// - One correct answer noted as: Correct Answer: a

// Format:
// 1. Your question here
// a) Option A  
// b) Option B  
// c) Option C  
// d) Option D  
// Correct Answer: b
//   `;

//   try {
//     const result = await model.generateContent(prompt);
//     const text = result?.response?.text();

//     if (!text) {
//       console.error('⚠️ Gemini returned empty response');
//       return res.status(500).json({ error: 'Gemini did not return any text.' });
//     }

//     console.log('✅ Gemini generated questions:\n', text);
//     res.json({ generatedQuestion: text }); // keep this key name for frontend
//   } catch (err) {
//     console.error('❌ Gemini generation error:', err);
//     res.status(500).json({ error: 'Gemini Booster API error', details: err.message });
//   }
// });

// // export default router;// routes/aiRoutes.js
import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();
const router = express.Router();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('❌ Missing GEMINI_API_KEY in .env');
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

router.post('/', async (req, res) => {
  const { lessonContent, type, context, courseName } = req.body;
  let prompt = '';

  // 🧪 Pretest Prompt - Dynamic by Course
  if (type === 'pretest') {
    prompt = `
You are an experienced instructor creating a diagnostic test for learners of **${courseName || 'a programming course'}**.

Based on the following course overview or context:
"""
${context}
"""

Generate a **Pretest with 15 multiple-choice questions**, categorized into three difficulty levels:

- 5 questions at **Beginner level**
- 5 questions at **Intermediate level**
- 5 questions at **Advanced level**

Each question must include:
- A clear question
- Four options (a), b), c), d))
- The correct answer on the next line in this format: **Answer: a**

Strict format:
BEGINNER QUESTIONS:
1. Question
a) Option A
b) Option B
c) Option C
d) Option D
Answer: a

Repeat the same for INTERMEDIATE QUESTIONS and ADVANCED QUESTIONS.
`;
  }

  //  Lesson-based quiz prompt
  else if (lessonContent) {
    prompt = `
You are an expert in **${courseName || 'this subject'}**.

Based on the following lesson content:
"""
${lessonContent}
"""

Generate a **short quiz of 5 multiple-choice questions** to test the learner’s understanding.

Each question must include:
- A relevant and clear question
- Four answer options (a), b), c), d))
- The correct answer in this format: **Correct Answer: b**

Strict format:
1. Question
a) Option A
b) Option B
c) Option C
d) Option D
Correct Answer: b
`;
  } else {
    return res.status(400).json({
      error: 'Missing lessonContent or context for quiz generation',
    });
  }

  try {
    const result = await model.generateContent(prompt);
    const text = result?.response?.text();

    if (!text) {
      return res.status(500).json({ error: 'Gemini returned empty content' });
    }

    console.log('✅ Gemini content generated');
    res.json({ generatedQuestion: text });
  } catch (err) {
    console.error('❌ Error from Gemini:', err);
    res.status(500).json({
      error: 'Failed to generate content from Gemini',
      details: err.message,
    });
  }
});

export default router;


// import express from 'express';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// const router = express.Router();

// const genAI = new GoogleGenerativeAI('YOUR_GEMINI_API_KEY'); // Replace with your Gemini key

// router.post('/generate', async (req, res) => {
//   const { lessonContent, preTestLevel } = req.body;

//   let prompt = '';

//   if (preTestLevel) {
//     prompt = `
// You are an AI coding tutor. Generate a pre-test quiz to assess the user's knowledge level in programming.

// Create 6 multiple-choice questions for the ${preTestLevel} level.

// Each question must include:
// - A conceptually or practically relevant question
// - Four options (a, b, c, d)
// - Correct answer marked at the end like this: Correct Answer: b

// Use this format:
// 1. Question text here?
// a) Option A
// b) Option B
// c) Option C
// d) Option D
// Correct Answer: b
// `;
//   } else if (lessonContent) {
//     prompt = `
// You are an AI coding tutor. Based on the following lesson content:

// """
// ${lessonContent}
// """

// Generate 6 multiple-choice quiz questions based on the lesson above.

// Each question must include:
// - A relevant conceptual or code-based question
// - Four options (a), b), c), d))
// - The correct answer clearly marked at the end like this: Correct Answer: c

// Use this format strictly:
// 1. Question here?
// a) Option A
// b) Option B
// c) Option C
// d) Option D
// Correct Answer: c

// The questions should test understanding of the topic and syntax related to the lesson content. Keep the questions appropriate to the difficulty level of the lesson (beginner, intermediate, or advanced).
// `;
//   } else {
//     return res.status(400).json({ error: 'Lesson content or pre-test level required' });
//   }

//   try {
//     const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();

//     res.json({ quiz: text });
//   } catch (error) {
//     console.error('Gemini error:', error);
//     res.status(500).json({ error: 'Failed to generate quiz' });
//   }
// });

// export default router;
