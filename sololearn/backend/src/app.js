// import dotenv from 'dotenv';
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// // Load environment variables
// dotenv.config();

// // Validate critical environment variables
// if (!process.env.MONGO_URI) {
//   console.error('Missing required MONGO_URI in .env');
//   process.exit(1);
// }
// if (!process.env.GEMINI_API_KEY) {
//   console.error('Missing required GEMINI_API_KEY in .env');
//   process.exit(1);
// }

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Database connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // ---------------- Models ----------------
// const questionSchema = new mongoose.Schema({
//   title: String,
//   content: String,
//   author: String,
//   votes: { type: Number, default: 0 },
//   tags: [String],
//   answers: { type: Number, default: 0 },
//   date: { type: Date, default: Date.now },
// });
// const Question = mongoose.model('Question', questionSchema);

// // ---------------- Gemini Quiz Generator ----------------
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// app.post('/api/quiz/generate', async (req, res) => {
//   const { title, description, type, count } = req.body;

//   try {
//     const prompt = `
//       Create ${count} ${type} quiz questions for the HTML topic:
//       Title: ${title}
//       Description: ${description}
//       Each question must have exactly 4 options and indicate the correct answer clearly.
//       Return as JSON array:
//       [
//         { "question": "string", "options": ["opt1","opt2","opt3","opt4"], "correctAnswer": "opt" }
//       ]
//     `;

//     const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
//     const result = await model.generateContent(prompt);
//     const text = result.response.text();

//     const questions = JSON.parse(text);
//     res.json({ questions });
//   } catch (error) {
//     console.error('Quiz generation failed:', error);
//     res.status(500).json({ error: 'Quiz generation failed' });
//   }
// });

// // ---------------- Question API ----------------

// // Get all questions
// app.get('/api/questions', async (req, res) => {
//   try {
//     const questions = await Question.find().sort({ date: -1 });
//     res.json(questions);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Post a new question
// app.post('/api/questions', async (req, res) => {
//   try {
//     const { title, content, author, tags } = req.body;
//     const question = new Question({ title, content, author, tags });
//     await question.save();
//     res.status(201).json(question);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Upvote/downvote a question
// app.patch('/api/questions/:id/vote', async (req, res) => {
//   try {
//     const { vote } = req.body; // vote: +1 or -1
//     const question = await Question.findByIdAndUpdate(
//       req.params.id,
//       { $inc: { votes: vote } },
//       { new: true }
//     );
//     if (!question) {
//       return res.status(404).json({ error: 'Question not found' });
//     }
//     res.json(question);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // ---------------- Screenshot Attempts API ----------------
// app.post('/api/screenshot-attempt', async (req, res) => {
//   const { userId, timestamp, reason } = req.body;
//   try {
//     // You can later integrate this with your User model
//     console.log('Screenshot attempt logged:', { userId, timestamp, reason });
//     res.status(200).json({ success: true, message: 'Attempt logged' });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// // ---------------- Health Check ----------------
// app.get('/', (req, res) => {
//   res.send('API is running');
// });

// // ---------------- Start Server ----------------
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import indexRouter from './routes/index.js';  // <-- Your router file

// Load env variables
dotenv.config();

// Check env variables
if (!process.env.MONGODB_URI) {
  console.error('Missing MONGODB_URI in .env');
  process.exit(1);
}
if (!process.env.GEMINI_API_KEY) {
  console.error('Missing GEMINI_API_KEY in .env');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Use your main router for all API routes
app.use('/api', indexRouter);

// Health check
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
