📘 Sololearn-Style Course Platform (Full-Stack MERN + AI + Proctoring System)

A complete Sololearn-inspired learning platform built with React, Node.js, Express, MongoDB, featuring advanced AI-powered assessments, Aadhaar verification, geolocation tracking, device detection, leaderboard system, and real-time exam proctoring.

🚀 Features
🎓 Course Learning System

Interactive lessons (MCQ, code quizzes, challenges)

Progress tracking for every lesson

Course-wise video and quiz assessments

Auto-fullscreen secure mode during quizzes

🛡️ Advanced Authentication

Email & password login

JWT-based protected routes

Backend role-based access control

Aadhaar number verification via API

Session and device tracking

🧠 AI-Powered Features

AI-generated hints and explanations during quizzes

Smart answer validation

Code checking (JavaScript/Java/Python)

Automatic summarization of learning progress

📸 Exam Proctoring System

A complete online assessment security module:

✔ Face Verification

face-api.js model

Face match before starting assessment

Live face-tracking during exams

✔ Tab Switch Monitoring

Detects if user leaves fullscreen

Auto-warning + auto-submit rules

Loss-of-focus detection

✔ Screen & Webcam Recording

Canvas-based merging of streams

Auto-upload to backend

Video chunking every 1 minute

MP4 conversion using FFmpeg

✔ Device & Browser Detection

Detects mobile vs desktop

Detects dual screen usage

Browser fingerprinting

🌍 Geolocation & Security

IP-based geolocation (via backend API)

Location logging for every login

Device + IP + location verification

Restricted region handling

📊 Leaderboard System

Tracks:

Top users

XP earned

Course completion %

Daily & weekly ranking

Separate leaderboard for:

Friends

Global

Per-language (HTML, CSS, JS, Java, Python)

🏗️ Tech Stack
Frontend

React + Vite

Tailwind CSS

React Router

Axios

face-api.js

Firebase Storage (video uploads)

Backend

Node.js + Express

MongoDB + Mongoose

Multer for video uploads

GridFS (optional)

FFmpeg for video conversion

JWT authentication

ipgeolocation.io API integration
Gemini Api Integration

📁 Project Structure
sololearn/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── AssessmentRecorder/
│   └── CoursePlayer/
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── uploads/
│   │   └── converted/
│   └── server.js
│
└── README.md

🚀 How to Run Locally
Backend
cd backend
npm install
npm start

Frontend
cd frontend
npm install
npm run dev

🔐 Environment Variables

Create a .env file in the backend:

MONGO_URI=your_database_url
port=
JWT_SECRET=your_secret
GEOLOCATION_API_KEY=your_key
FIREBASE_API_KEY=your_key
Gemini_API_Key=your_key

🚀 Deployment

Frontend: Vercel

Backend: Render / Railway / Vercel Serverless

Uploads: Firebase Storage or Local Server

Database: MongoDB Atlas

🧑‍🎓 Developed By

Komal Narawade
MERN Stack Developer | AI-Integrated Web Apps | DSA in Java
