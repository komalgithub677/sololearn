import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
});

const quizSchema = new mongoose.Schema({
  topic: String,
  questions: [questionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("preQuiz", quizSchema);
