// models/quizModel.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
});

const quizSchema = new mongoose.Schema({
  lessonId: { type: String, required: false }, // optional mapping to lesson
  title: { type: String, required: false },
  description: { type: String, required: false },
  type: { type: String, default: "multiple-choice" },
  questions: { type: [questionSchema], default: [] },
  createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
