const socket = io();
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const instructions = document.getElementById('instructions');
const quizContainer = document.getElementById('quizContainer');
const resultDiv = document.getElementById('result');
const timerEl = document.getElementById('timer');
const progressBar = document.getElementById('progressBar');
const questionCounter = document.getElementById('questionCounter');
const webcamOverlay = document.getElementById('webcam-overlay');
const webcamVideo = document.getElementById('webcam-video');
const recordingStatus = document.getElementById('recording-status');

let recording = false;
let mediaRecorder;
let recordedChunks = [];
let studentName = '';
let allQuestions = [];
let currentQuestionIndex = 0;
let answeredAnswers = [];
let timer;
let totalTime = 60;

// === Face Detection Variables ===
let faceMissingSeconds = 0;
let faceCheckInterval;

// ==== Fullscreen Enforcement ====
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        alert("You have exited fullscreen mode. Please return to fullscreen to continue the quiz.");
    }
});

// ---- Recording + Face Detection Logic ----
async function startRecording() {
    try {
        if (quizContainer.requestFullscreen) {
            await quizContainer.requestFullscreen();
        }

        webcamOverlay.style.display = "block";
        const webcamStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        webcamVideo.srcObject = webcamStream;

        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: { cursor: "always" }, audio: false });

        const canvas = document.createElement('canvas');
        canvas.width = quizContainer.offsetWidth;
        canvas.height = quizContainer.offsetHeight;
        const ctx = canvas.getContext('2d');

        const screenVideo = document.createElement('video');
        screenVideo.srcObject = screenStream;
        screenVideo.play();

        const webcamFeed = document.createElement('video');
        webcamFeed.srcObject = webcamStream;
        webcamFeed.play();

        function drawFrame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(screenVideo, 0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.beginPath();
            ctx.rect(canvas.width - 220, canvas.height - 170, 200, 150);
            ctx.clip();
            ctx.drawImage(webcamFeed, canvas.width - 220, canvas.height - 170, 200, 150);
            ctx.restore();

            if (recording) requestAnimationFrame(drawFrame);
        }

        recording = true;
        drawFrame();

        const mergedStream = canvas.captureStream(25);
        mediaRecorder = new MediaRecorder(mergedStream, { mimeType: 'video/webm' });
        recordedChunks = [];

        mediaRecorder.ondataavailable = e => {
            if (e.data.size > 0) recordedChunks.push(e.data);
        };

        mediaRecorder.onstop = handleRecordingStop;
        mediaRecorder.start();

        recordingStatus.textContent = "Recording in progress...";

        await loadFaceModels();
        startFaceDetection(webcamVideo);
    } catch (err) {
        recordingStatus.textContent = "Recording failed: " + err.message;
    }
}

function stopRecording() {
    if (!recording || !mediaRecorder || mediaRecorder.state === 'inactive') return;
    recording = false;
    mediaRecorder.stop();
    recordingStatus.textContent = "Processing recording...";
    stopFaceDetection();
}

// ---- Upload Blob After Recording ----
async function handleRecordingStop() {
    recordingStatus.textContent = "Uploading recording...";
    const blob = new Blob(recordedChunks, { type: 'video/webm' });

    const formData = new FormData();
    formData.append('video', blob, 'quiz-recording.webm');
    formData.append('student', studentName);

    try {
        const res = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        recordingStatus.textContent = res.ok ? "Recording uploaded successfully ✔️" : "Upload failed.";
    } catch (e) {
        recordingStatus.textContent = "Upload error: " + e.message;
    }
}

// ---- Name Submit ----
nameForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    studentName = nameInput.value.trim();
    if (studentName) {
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = `Welcome ${studentName}! 🎉 Get ready to start the quiz!`;
        nameForm.parentNode.appendChild(successMsg);

        setTimeout(async () => {
            instructions.style.display = 'none';
            quizContainer.style.display = 'block';
            document.body.classList.add('quiz-active');
            updateProgress(1, 10);
            webcamOverlay.style.display = "block";
            await startRecording();
        }, 2000);

        socket.emit('joinQuiz', { name: studentName, role: 'Student' });

        document.getElementById('nextBtn').onclick = () => {
            if (currentQuestionIndex < allQuestions.length - 1) {
                currentQuestionIndex++;
                renderQuestion(allQuestions, answeredAnswers);
            }
        };

        document.getElementById('summaryBtn').onclick = submitAllAnswers;

        document.getElementById('submitTestBtn').onclick = () => {
            if (allQuestions.length === 0 || answeredAnswers.length === 0) {
                alert("No answers to submit!");
                return;
            }
            submitAllAnswers();
            stopRecording();
        };
    }
});

// ==== Face API Setup ====
async function loadFaceModels() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
}

function startFaceDetection(video) {
    faceCheckInterval = setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());

        if (!detections.length) {
            faceMissingSeconds++;
            console.warn(`No face detected for ${faceMissingSeconds} second(s)...`);
            if (faceMissingSeconds >= 5) {
                alert("Face not detected for 5 seconds! Quiz will be auto-submitted.");
                submitAllAnswers();
                stopRecording();
            }
        } else {
            faceMissingSeconds = 0;
        }
    }, 1000);
}

function stopFaceDetection() {
    clearInterval(faceCheckInterval);
}

// ==== Socket Questions ====
socket.on('questions', (questions) => {
    allQuestions = questions;
    answeredAnswers = new Array(questions.length).fill(null);
    currentQuestionIndex = 0;
    startGlobalTimer();
    renderQuestion(questions, answeredAnswers);
});

// ==== Render Question ====
function renderQuestion(questions, answers) {
    const q = questions[currentQuestionIndex];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('options');
    questionText.innerText = q.question;
    optionsContainer.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-button');
        if (answers[currentQuestionIndex] === opt) btn.classList.add('selected');
        btn.onclick = () => {
            answers[currentQuestionIndex] = opt;
            highlightSelectedOption(btn);
        };
        optionsContainer.appendChild(btn);
    });
    updateNavButtons(questions.length);
    updateProgress(currentQuestionIndex + 1, questions.length);
}

function highlightSelectedOption(selectedBtn) {
    const buttons = selectedBtn.parentNode.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    selectedBtn.classList.add('selected', 'pulse');
    setTimeout(() => selectedBtn.classList.remove('pulse'), 500);
}

function updateNavButtons(totalQuestions) {
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.disabled = currentQuestionIndex === totalQuestions - 1;
}

function updateProgress(current, total) {
    const percentage = (current / total) * 100;
    progressBar.style.width = percentage + '%';
    questionCounter.textContent = `Question ${current} of ${total}`;
}

// ==== Timer Logic ====
function startGlobalTimer() {
    let remaining = totalTime;
    timerEl.innerText = `Time Left: ${remaining}s`;
    timer = setInterval(() => {
        remaining--;
        timerEl.innerText = `Time Left: ${remaining}s`;
        if (remaining <= 10) timerEl.style.color = 'red';
        if (remaining <= 0) {
            clearInterval(timer);
            submitAllAnswers();
            stopRecording();
        }
    }, 1000);
}

function submitAllAnswers() {
    clearInterval(timer);
    stopFaceDetection();
    const submissionTime = new Date().toISOString();
    socket.emit('submitAllAnswers', {
        answers: answeredAnswers,
        name: studentName,
        submittedAt: submissionTime
    });
    showFinalResults(submissionTime);
}

// ==== Show Result ====
function showFinalResults(submittedAt) {
    const optionsContainer = document.getElementById('options');
    const questionText = document.getElementById('questionText');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    optionsContainer.innerHTML = '';
    questionText.innerText = '🎉 Quiz Over!';
    resultDiv.innerHTML = `<h3>Your Answers:</h3>`;
    if (submittedAt) {
        const formattedTime = new Date(submittedAt).toLocaleString();
        resultDiv.innerHTML += `<p><strong>Submitted at:</strong> ${formattedTime}</p>`;
    }
    allQuestions.forEach((q, i) => {
        const yourAnswer = answeredAnswers[i];
        const isCorrect = yourAnswer === q.correctAnswer;
        resultDiv.innerHTML += `
            <div style="margin-bottom: 15px; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
                <p><strong>Q${i + 1}:</strong> ${q.question}</p>
                <p><strong>Your Answer:</strong> ${yourAnswer || '<em>No Answer</em>'}</p>
                <p><strong>Correct Answer:</strong> ${q.correctAnswer}</p>
                <p><strong>Explanation:</strong> ${q.explanation}</p>
            </div>
        `;
    });
    nextBtn.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'none';
}

socket.on('quizResults', (data) => {
    window.quizResultsData = data;
});

socket.on('updateScores', (scores) => {
    console.log("Live Scores Updated:", scores);
});

document.querySelectorAll('.particle').forEach((particle, index) => {
    particle.style.animationDelay = (index * 1.5) + 's';
});
