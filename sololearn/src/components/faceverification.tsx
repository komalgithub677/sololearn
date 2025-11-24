// import React, { useCallback, useRef, useState, useEffect } from 'react';
// import Webcam from 'react-webcam';
// import styles from './FaceVerification.module.css';

// const FACEPP_API_KEY = 'R7z6t99Hp18QLVsXZw49cZi4EvQxpf_V';
// const FACEPP_API_SECRET = 'VrRpLgxUFgNjrlTj5vzqZ_oBbKP3SX41';

// type VerificationStatus = 'idle' | 'verifying' | 'success' | 'failed';

// interface QuizQuestion {
//   question: string;
//   options: string[];
//   correctAnswer: string;
// }

// const quizQuestions: QuizQuestion[] = [
//   {
//     question: "What is the primary function of a CPU?",
//     options: ["Storage", "Processing", "Networking", "Rendering"],
//     correctAnswer: "Processing",
//   },
//   {
//     question: "Which of these is an object-oriented programming language?",
//     options: ["HTML", "CSS", "Java", "SQL"],
//     correctAnswer: "Java",
//   },
//   {
//     question: "What does RAM stand for?",
//     options: [
//       "Random Access Memory",
//       "Read-Only Memory",
//       "Rapid Access Module",
//       "Runtime Application Memory",
//     ],
//     correctAnswer: "Random Access Memory",
//   },
//   {
//     question: "Which protocol is used for email transmission?",
//     options: ["HTTP", "FTP", "SMTP", "DNS"],
//     correctAnswer: "SMTP",
//   },
//   {
//     question: "What is the purpose of a firewall?",
//     options: [
//       "Data storage",
//       "Network security",
//       "Code compilation",
//       "User authentication",
//     ],
//     correctAnswer: "Network security",
//   },
//   {
//     question: "Which of these is a cloud computing service?",
//     options: ["Photoshop", "AWS", "Apache", "MySQL"],
//     correctAnswer: "AWS",
//   },
//   {
//     question: "What does VPN stand for?",
//     options: [
//       "Virtual Private Network",
//       "Variable Processing Node",
//       "Virtual Public Network",
//       "Visual Programming Node",
//     ],
//     correctAnswer: "Virtual Private Network",
//   },
//   {
//     question: "Which data structure follows the Last In, First Out (LIFO) principle?",
//     options: ["Queue", "Stack", "Array", "Linked List"],
//     correctAnswer: "Stack",
//   },
// ];

// const FaceVerification: React.FC = () => {
//   const webcamRef = useRef<Webcam | null>(null);
//   const referenceInputRef = useRef<HTMLInputElement | null>(null);
//   const webcamContainerRef = useRef<HTMLDivElement | null>(null);
//   const [referenceImg, setReferenceImg] = useState<string | null>(null);
//   const [liveImg, setLiveImg] = useState<string | null>(null);
//   const [status, setStatus] = useState<VerificationStatus>('idle');
//   const [message, setMessage] = useState<string>('');
//   const [confidence, setConfidence] = useState<number | null>(null);
//   const [showQuiz, setShowQuiz] = useState<boolean>(false);
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const [answers, setAnswers] = useState<Record<number, string[]>>({});
//   const [quizFinished, setQuizFinished] = useState<boolean>(false);
//   const [score, setScore] = useState<number>(0);
//   const [timeLeft, setTimeLeft] = useState<number>(10 * 60);
//   const [verificationFailed, setVerificationFailed] = useState<boolean>(false);
//   const [isDragging, setIsDragging] = useState<boolean>(false);
//   const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
//   const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
//   const [isProcrastinationOn, setIsProcrastinationOn] = useState<boolean>(false);
//   const [rotationSpeed, setRotationSpeed] = useState<number>(5);
//   const [showNotification, setShowNotification] = useState<boolean>(false);

//   useEffect(() => {
//     let timer: NodeJS.Timeout | undefined;
//     if (showQuiz && !quizFinished && !verificationFailed && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft((prev) => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             setQuizFinished(true);
//             calculateScore();
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     }
//     return () => {
//       if (timer) clearInterval(timer);
//     };
//   }, [showQuiz, quizFinished, verificationFailed, timeLeft]);

//   useEffect(() => {
//     let verificationInterval: NodeJS.Timeout | undefined;
//     if (showQuiz && !quizFinished && !verificationFailed && referenceImg) {
//       verificationInterval = setInterval(async () => {
//         const liveImage = captureLive();
//         if (liveImage && referenceImg) {
//           const result = await compareFacesFacePlusPlus(referenceImg, liveImage);
//           if (!result.isVerified) {
//             setVerificationFailed(true);
//             setMessage('Live verification failed. Quiz terminated.');
//             clearInterval(verificationInterval);
//           }
//         }
//       }, 5000);
//     }
//     return () => {
//       if (verificationInterval) clearInterval(verificationInterval);
//     };
//   }, [showQuiz, quizFinished, verificationFailed, referenceImg]);

//   useEffect(() => {
//     if (isProcrastinationOn) {
//       setShowNotification(true);
//       const timeout = setTimeout(() => setShowNotification(false), 3000);
//       return () => clearTimeout(timeout);
//     }
//   }, [isProcrastinationOn]);

//   const captureLive = useCallback(() => {
//     if (webcamRef.current) {
//       return webcamRef.current.getScreenshot();
//     }
//     return null;
//   }, []);

//   const handleReferenceUpload = () => {
//     if (referenceInputRef.current) {
//       referenceInputRef.current.click();
//     }
//   };

//   const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (typeof reader.result === 'string') {
//           setReferenceImg(reader.result);
//           setMessage('Reference image uploaded. Now capture your live image.');
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   }, []);

//   const handleCaptureLive = async () => {
//     const img = captureLive();
//     if (img && referenceImg) {
//       setLiveImg(img);
//       setStatus('verifying');
//       setMessage('Verifying...');
//       const result = await compareFacesFacePlusPlus(referenceImg, img);
//       if (result.isVerified) {
//         setStatus('success');
//         setMessage('Verification successful! Click "Start Test" to begin the quiz.');
//         setConfidence(result.confidence);
//       } else {
//         setStatus('failed');
//         setMessage('Verification COGS-1234 Verification failed. Please try again.');
//         setConfidence(result.confidence);
//       }
//     }
//   };

//   const handleStartTest = () => {
//     setShowQuiz(true);
//   };

//   const handleRetake = () => {
//     setReferenceImg(null);
//     setLiveImg(null);
//     setStatus('idle');
//     setMessage('');
//     setConfidence(null);
//     setShowQuiz(false);
//     setCurrentQuestion(0);
//     setAnswers({});
//     setQuizFinished(false);
//     setScore(0);
//     setTimeLeft(10 * 60);
//     setVerificationFailed(false);
//     setPosition({ x: 0, y: 0 });
//     setIsProcrastinationOn(false);
//     setRotationSpeed(5);
//     setShowNotification(false);
//     if (referenceInputRef.current) referenceInputRef.current.value = '';
//   };

//   const handleAnswerSelect = (option: string) => {
//     if (verificationFailed) return;
//     setAnswers((prev) => {
//       const currentAnswers = prev[currentQuestion] || [];
//       if (currentAnswers.includes(option)) {
//         return {
//           ...prev,
//           [currentQuestion]: currentAnswers.filter((ans) => ans !== option),
//         };
//       } else {
//         return {
//           ...prev,
//           [currentQuestion]: [...currentAnswers, option],
//         };
//       }
//     });
//   };

//   const handleNextQuestion = () => {
//     if (verificationFailed) return;
//     if (currentQuestion < quizQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setQuizFinished(true);
//       calculateScore();
//     }
//   };

//   const calculateScore = () => {
//     let correct = 0;
//     quizQuestions.forEach((q, index) => {
//       const userAnswers = answers[index] || [];
//       if (userAnswers.length === 1 && userAnswers[0] === q.correctAnswer) {
//         correct += 1;
//       }
//     });
//     setScore(correct);
//   };

//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!showQuiz || verificationFailed) return;
//     if (webcamContainerRef.current) {
//       const rect = webcamContainerRef.current.getBoundingClientRect();
//       setOffset({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//       setIsDragging(true);
//     }
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (isDragging && webcamContainerRef.current && showQuiz && !verificationFailed) {
//       const parent = webcamContainerRef.current.parentElement?.getBoundingClientRect();
//       if (parent) {
//         const newX = e.clientX - offset.x;
//         const newY = e.clientY - offset.y;
//         const maxX = parent.width - webcamContainerRef.current.offsetWidth;
//         const maxY = parent.height - webcamContainerRef.current.offsetHeight;
//         setPosition({
//           x: Math.max(0, Math.min(newX, maxX)),
//           y: Math.max(0, Math.min(newY, maxY)),
//         });
//       }
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const startProcrastination = () => {
//     setIsProcrastinationOn(true);
//   };

//   const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setRotationSpeed(Number(e.target.value));
//   };

//   const dismissNotification = () => {
//     setShowNotification(false);
//   };

//   return (
//     <div
//       className={`${showQuiz ? 'min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center' : 'max-w-4xl mx-auto p-6'} transition-all duration-500`}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       {!showQuiz && (
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Face++ Identity Verification</h2>
//           <p className="text-gray-600 mb-8 text-center leading-relaxed">
//             1. Upload your reference image.<br />
//             2. Capture a live image for verification.<br />
//             3. Take the 10-minute IT quiz with continuous verification.
//           </p>
//           <div className="flex justify-center mb-8 relative">
//             {referenceImg && !liveImg && (
//               <div className="transform transition-transform duration-500 ease-out scale-95 hover:scale-100 hover:shadow-2xl">
//                 <Webcam
//                   audio={false}
//                   ref={webcamRef}
//                   screenshotFormat="image/jpeg"
//                   className="rounded-lg border-4 border-blue-200 shadow-md animate-pulse"
//                   mirrored
//                   videoConstraints={{
//                     width: 400,
//                     height: 300,
//                     facingMode: 'user',
//                   }}
//                 />
//               </div>
//             )}
//           </div>
//           <div className="flex justify-center gap-4 mb-8">
//             {!referenceImg && !liveImg && (
//               <>
//                 <input
//                   type="file"
//                   accept="image/jpeg,image/png"
//                   ref={referenceInputRef}
//                   className="hidden"
//                   onChange={handleFileUpload}
//                 />
//                 <button
//                   onClick={handleReferenceUpload}
//                   className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
//                 >
//                   Upload Reference Image
//                 </button>
//               </>
//             )}
//             {referenceImg && !liveImg && (
//               <button
//                 onClick={handleCaptureLive}
//                 className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
//               >
//                 Capture Live Image & Verify
//               </button>
//             )}
//             {(referenceImg || liveImg) && (
//               <button
//                 onClick={handleRetake}
//                 className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-md"
//               >
//                 Retake
//               </button>
//             )}
//           </div>
//           {status === 'success' && !showQuiz && (
//             <div className="flex justify-center mb-8">
//               <button
//                 onClick={handleStartTest}
//                 className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md"
//               >
//                 Start Test
//               </button>
//             </div>
//           )}
//           <div className="flex justify-center gap-8 mb-8">
//             {referenceImg && (
//               <div className="text-center">
//                 <div className="text-sm font-semibold text-gray-700 mb-2">Reference Image</div>
//                 <img src={referenceImg} alt="Reference" className="w-48 h-36 object-cover rounded-lg border-2 border-gray-200 shadow-sm" />
//               </div>
//             )}
//             {liveImg && (
//               <div className="text-center">
//                 <div className="text-sm font-semibold text-gray-700 mb-2">Live Image</div>
//                 <img src={liveImg} alt="Live" className="w-48 h-36 object-cover rounded-lg border-2 border-gray-200 shadow-sm" />
//               </div>
//             )}
//           </div>
//           {status !== 'idle' && (
//             <div
//               className={`p-4 rounded-lg text-center ${
//                 status === 'success'
//                   ? 'bg-green-100 text-green-800'
//                   : status === 'failed'
//                   ? 'bg-red-100 text-red-800'
//                   : 'bg-blue-100 text-blue-800'
//               } transition-all duration-300`}
//             >
//               {message}
//               {confidence !== null && (
//                 <div className="mt-2 text-sm">
//                   Face Match Confidence: {confidence.toFixed(2)}%
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       )}
//       {showQuiz && (
//         <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-10 animate-fade-in flex flex-col md:flex-row gap-8 relative">
//           {showNotification && (
//             <div className={`${styles.notification} bg-blue-500 text-white p-4 rounded-lg shadow-lg flex justify-between items-center`}>
//               <span>360° Procrastination is active! Enjoy the spin.</span>
//               <button
//                 onClick={dismissNotification}
//                 className="text-white font-bold hover:text-gray-200"
//               >
//                 ✕
//               </button>
//             </div>
//           )}
//           <div className="flex-1">
//             {!isProcrastinationOn && (
//               <div className="relative group mb-6 text-center">
//                 <button
//                   onClick={startProcrastination}
//                   className="px-6 py-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shadow-md"
//                 >
//                   Start 360° Procrastination
//                 </button>
//                 <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2">
//                   Activate spinning ring around webcam
//                 </span>
//               </div>
//             )}
//             <h3 className="text-4xl font-bold text-gray-800 mb-6 text-center">IT Quiz Challenge</h3>
//             <div className="text-lg font-semibold text-red-600 mb-6 text-center">Time Left: {formatTime(timeLeft)}</div>
//             {verificationFailed ? (
//               <div className="text-center space-y-6">
//                 <h4 className="text-2xl font-semibold text-red-700">Verification Failed</h4>
//                 <p className="text-lg text-gray-600">{message}</p>
//                 <button
//                   onClick={handleRetake}
//                   className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-md"
//                 >
//                   Restart
//                 </button>
//               </div>
//             ) : !quizFinished ? (
//               <div className="space-y-6">
//                 <h4 className="text-2xl font-semibold text-gray-700">
//                   Question {currentQuestion + 1} of {quizQuestions.length}: {quizQuestions[currentQuestion].question}
//                 </h4>
//                 <div className="grid grid-cols-1 gap-4">
//                   {quizQuestions[currentQuestion].options.map((option, index) => (
//                     <div
//                       key={index}
//                       className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
//                         answers[currentQuestion]?.includes(option)
//                           ? 'bg-blue-600 text-white border-blue-700'
//                           : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
//                       }`}
//                       onClick={() => handleAnswerSelect(option)}
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//                 <button
//                   onClick={handleNextQuestion}
//                   className={`w-full py-3 rounded-lg text-white font-semibold transition-colors duration-300 ${
//                     !answers[currentQuestion]?.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//                   }`}
//                   disabled={!answers[currentQuestion]?.length}
//                 >
//                   {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Submit Quiz'}
//                 </button>
//               </div>
//             ) : (
//               <div className="text-center space-y-6 animate-fade-in">
//                 <h4 className="text-2xl font-semibold text-gray-700">Quiz Completed!</h4>
//                 <p className="text-lg text-gray-600">Your score: {score} out of {quizQuestions.length}</p>
//                 <p className="text-lg text-gray-600">Percentage: {((score / quizQuestions.length) * 100).toFixed(2)}%</p>
//                 <button
//                   onClick={handleRetake}
//                   className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-md"
//                 >
//                   Restart Quiz
//                 </button>
//               </div>
//             )}
//           </div>
//           <div className="w-full md:w-80 flex flex-col items-center relative">
//             <h4 className="text-lg font-semibold text-gray-700 mb-4">Live Verification</h4>
//             <div
//               ref={webcamContainerRef}
//               className={`${styles.webcamContainer} transform transition-transform duration-200 ease-out scale-95 hover:scale-100 hover:shadow-2xl`}
//               style={{ position: 'absolute', left: position.x, top: position.y, cursor: isDragging ? 'grabbing' : 'grab' }}
//               onMouseDown={handleMouseDown}
//             >
//               {isProcrastinationOn && (
//                 <div
//                   className={`${styles.procrastinationRing} absolute inset-0 rounded-full border-4 border-dashed border-purple-500 animate-spin`}
//                   style={{ animationDuration: `${10 / rotationSpeed}s` }}
//                 ></div>
//               )}
//               <Webcam
//                 audio={false}
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//                 className="rounded-lg border-4 border-blue-200 shadow-md"
//                 mirrored
//                 videoConstraints={{
//                   width: 320,
//                   height: 240,
//                   facingMode: 'user',
//                 }}
//               />
//             </div>
//             <div className="mt-80 flex flex-col items-center space-y-4">
//               {!isProcrastinationOn && (
//                 <div className="relative group">
//                   <button
//                     onClick={startProcrastination}
//                     className="px-6 py-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shadow-md"
//                   >
//                     Start 360° Procrastination
//                   </button>
//                   <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2">
//                     Activate spinning ring around webcam
//                   </span>
//                 </div>
//               )}
//               {isProcrastinationOn && (
//                 <div className="flex flex-col items-center">
//                   <label className="text-sm font-medium text-gray-600 mb-1">Rotation Speed</label>
//                   <input
//                     type="range"
//                     min="1"
//                     max="10"
//                     value={rotationSpeed}
//                     onChange={handleSpeedChange}
//                     className="w-48 accent-blue-500"
//                   />
//                 </div>
//               )}
//               <p className="text-sm text-gray-500">Keep your face visible for continuous verification. Drag to move the webcam.</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// async function compareFacesFacePlusPlus(
//   imageBase64_1: string,
//   imageBase64_2: string
// ): Promise<{ isVerified: boolean; confidence: number }> {
//   const url = 'https://api-us.faceplusplus.com/facepp/v3/compare';
//   const base64_1 = imageBase64_1.split(',')[1];
//   const base64_2 = imageBase64_2.split(',')[1];

//   const formData = new FormData();
//   formData.append('api_key', FACEPP_API_KEY);
//   formData.append('api_secret', FACEPP_API_SECRET);
//   formData.append('image_base64_1', base64_1);
//   formData.append('image_base64_2', base64_2);

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       body: formData,
//     });
//     const data = await response.json();
//     return {
//       isVerified: data.confidence && data.confidence > 85,
//       confidence: data.confidence ? data.confidence : 0,
//     };
//   } catch (error) {
//     return { isVerified: false, confidence: 0 };
//   }
// }

// export default FaceVerification;


import React, { useCallback, useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import styles from './FaceVerification.module.css';
import AssessmentRecorder from './AssessmentRecorder';
import GeolocationTracker from './GeolocationTracker';

const FACEPP_API_KEY = 'R7z6t99Hp18QLVsXZw49cZi4EvQxpf_V';
const FACEPP_API_SECRET = 'VrRpLgxUFgNjrlTj5vzqZ_oBbKP3SX41';

type VerificationStatus = 'idle' | 'verifying' | 'success' | 'failed';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the primary function of a CPU?",
    options: ["Storage", "Processing", "Networking", "Rendering"],
    correctAnswer: "Processing",
  },
  {
    question: "Which of these is an object-oriented programming language?",
    options: ["HTML", "CSS", "Java", "SQL"],
    correctAnswer: "Java",
  },
  {
    question: "What does RAM stand for?",
    options: [
      "Random Access Memory",
      "Read-Only Memory",
      "Rapid Access Module",
      "Runtime Application Memory",
    ],
    correctAnswer: "Random Access Memory",
  },
  {
    question: "Which protocol is used for email transmission?",
    options: ["HTTP", "FTP", "SMTP", "DNS"],
    correctAnswer: "SMTP",
  },
  {
    question: "What is the purpose of a firewall?",
    options: [
      "Data storage",
      "Network security",
      "Code compilation",
      "User authentication",
    ],
    correctAnswer: "Network security",
  },
  {
    question: "Which of these is a cloud computing service?",
    options: ["Photoshop", "AWS", "Apache", "MySQL"],
    correctAnswer: "AWS",
  },
  {
    question: "What does VPN stand for?",
    options: [
      "Virtual Private Network",
      "Variable Processing Node",
      "Virtual Public Network",
      "Visual Programming Node",
    ],
    correctAnswer: "Virtual Private Network",
  },
  {
    question: "Which data structure follows the Last In, First Out (LIFO) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: "Stack",
  },
];

const FaceVerification: React.FC = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const referenceInputRef = useRef<HTMLInputElement | null>(null);
  const webcamContainerRef = useRef<HTMLDivElement | null>(null);
  const [referenceImg, setReferenceImg] = useState<string | null>(null);
  const [liveImg, setLiveImg] = useState<string | null>(null);
  const [status, setStatus] = useState<VerificationStatus>('idle');
  const [message, setMessage] = useState<string>('');
  const [confidence, setConfidence] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(10 * 60);
  const [verificationFailed, setVerificationFailed] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isProcrastinationOn, setIsProcrastinationOn] = useState<boolean>(false);
  const [rotationSpeed, setRotationSpeed] = useState<number>(5);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (showQuiz && !quizFinished && !verificationFailed && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setQuizFinished(true);
            calculateScore();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [showQuiz, quizFinished, verificationFailed, timeLeft]);

  useEffect(() => {
    let verificationInterval: NodeJS.Timeout | undefined;
    if (showQuiz && !quizFinished && !verificationFailed && referenceImg) {
      verificationInterval = setInterval(async () => {
        const liveImage = captureLive();
        if (liveImage && referenceImg) {
          const result = await compareFacesFacePlusPlus(referenceImg, liveImage);
          if (!result.isVerified) {
            setVerificationFailed(true);
            setMessage('Live verification failed. Quiz terminated.');
            clearInterval(verificationInterval);
          }
        }
      }, 5000);
    }
    return () => {
      if (verificationInterval) clearInterval(verificationInterval);
    };
  }, [showQuiz, quizFinished, verificationFailed, referenceImg]);

  useEffect(() => {
    if (isProcrastinationOn) {
      setShowNotification(true);
      const timeout = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [isProcrastinationOn]);

  const captureLive = useCallback(() => {
    if (webcamRef.current) {
      return webcamRef.current.getScreenshot();
    }
    return null;
  }, []);

  const handleReferenceUpload = () => {
    if (referenceInputRef.current) {
      referenceInputRef.current.click();
    }
  };

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setReferenceImg(reader.result);
          setMessage('Reference image uploaded. Now capture your live image.');
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleCaptureLive = async () => {
    const img = captureLive();
    if (img && referenceImg) {
      setLiveImg(img);
      setStatus('verifying');
      setMessage('Verifying...');
      const result = await compareFacesFacePlusPlus(referenceImg, img);
      if (result.isVerified) {
        setStatus('success');
        setMessage('Verification successful! Click "Start Test" to begin the quiz.');
        setConfidence(result.confidence);
      } else {
        setStatus('failed');
        setMessage('Verification COGS-1234 Verification failed. Please try again.');
        setConfidence(result.confidence);
      }
    }
  };

  const handleStartTest = () => {
    setShowQuiz(true);
  };

  const handleRetake = () => {
    setReferenceImg(null);
    setLiveImg(null);
    setStatus('idle');
    setMessage('');
    setConfidence(null);
    setShowQuiz(false);
    setCurrentQuestion(0);
    setAnswers({});
    setQuizFinished(false);
    setScore(0);
    setTimeLeft(10 * 60);
    setVerificationFailed(false);
    setPosition({ x: 0, y: 0 });
    setIsProcrastinationOn(false);
    setRotationSpeed(5);
    setShowNotification(false);
    if (referenceInputRef.current) referenceInputRef.current.value = '';
  };

  const handleAnswerSelect = (option: string) => {
    if (verificationFailed) return;
    setAnswers((prev) => {
      const currentAnswers = prev[currentQuestion] || [];
      if (currentAnswers.includes(option)) {
        return {
          ...prev,
          [currentQuestion]: currentAnswers.filter((ans) => ans !== option),
        };
      } else {
        return {
          ...prev,
          [currentQuestion]: [...currentAnswers, option],
        };
      }
    });
  };

  const handleNextQuestion = () => {
    if (verificationFailed) return;
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
      calculateScore();
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((q, index) => {
      const userAnswers = answers[index] || [];
      if (userAnswers.length === 1 && userAnswers[0] === q.correctAnswer) {
        correct += 1;
      }
    });
    setScore(correct);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showQuiz || verificationFailed) return;
    if (webcamContainerRef.current) {
      const rect = webcamContainerRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && webcamContainerRef.current && showQuiz && !verificationFailed) {
      const parent = webcamContainerRef.current.parentElement?.getBoundingClientRect();
      if (parent) {
        const newX = e.clientX - offset.x;
        const newY = e.clientY - offset.y;
        const maxX = parent.width - webcamContainerRef.current.offsetWidth;
        const maxY = parent.height - webcamContainerRef.current.offsetHeight;
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const startProcrastination = () => {
    setIsProcrastinationOn(true);
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRotationSpeed(Number(e.target.value));
  };

  const dismissNotification = () => {
    setShowNotification(false);
  };

  return (
    <div
      className={`${showQuiz ? 'min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center' : 'max-w-4xl mx-auto p-6'} transition-all duration-500`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {!showQuiz && (
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Face++ Identity Verification</h2>
          <p className="text-gray-600 mb-8 text-center leading-relaxed">
            1. Upload your reference image.<br />
            2. Capture a live image for verification.<br />
            3. Take the 10-minute IT quiz with continuous verification.
          </p>
          <div className="flex justify-center mb-8 relative">
            {referenceImg && !liveImg && (
              <div className="transform transition-transform duration-500 ease-out scale-95 hover:scale-100 hover:shadow-2xl">
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="rounded-lg border-4 border-blue-200 shadow-md animate-pulse"
                  mirrored
                  videoConstraints={{
                    width: 400,
                    height: 300,
                    facingMode: 'user',
                  }}
                />
              </div>
            )}
          </div>
          <div className="flex justify-center gap-4 mb-8">
            {!referenceImg && !liveImg && (
              <>
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  ref={referenceInputRef}
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <button
                  onClick={handleReferenceUpload}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
                >
                  Upload Reference Image
                </button>
              </>
            )}
            {referenceImg && !liveImg && (
              <button
                onClick={handleCaptureLive}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
              >
                Capture Live Image & Verify
              </button>
            )}
            {(referenceImg || liveImg) && (
              <button
                onClick={handleRetake}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-md"
              >
                Retake
              </button>
            )}
          </div>
          {status === 'success' && !showQuiz && (
            <div className="flex justify-center mb-8">
              <button
                onClick={handleStartTest}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md"
              >
                Start Test
              </button>
            </div>
          )}
          <div className="flex justify-center gap-8 mb-8">
            {referenceImg && (
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-700 mb-2">Reference Image</div>
                <img src={referenceImg} alt="Reference" className="w-48 h-36 object-cover rounded-lg border-2 border-gray-200 shadow-sm" />
              </div>
            )}
            {liveImg && (
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-700 mb-2">Live Image</div>
                <img src={liveImg} alt="Live" className="w-48 h-36 object-cover rounded-lg border-2 border-gray-200 shadow-sm" />
              </div>
            )}
          </div>
          {status !== 'idle' && (
            <div
              className={`p-4 rounded-lg text-center ${
                status === 'success'
                  ? 'bg-green-100 text-green-800'
                  : status === 'failed'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-blue-100 text-blue-800'
              } transition-all duration-300`}
            >
              {message}
              {confidence !== null && (
                <div className="mt-2 text-sm">
                  Face Match Confidence: {confidence.toFixed(2)}%
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {showQuiz && <AssessmentRecorder active={showQuiz} />}
      {showQuiz && <GeolocationTracker />}
  {showQuiz && (
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-10 animate-fade-in flex flex-col md:flex-row gap-8 relative">
          {showNotification && (
            <div className={`${styles.notification} bg-blue-500 text-white p-4 rounded-lg shadow-lg flex justify-between items-center`}>
              <span>360° Procrastination is active! Enjoy the spin.</span>
              <button
                onClick={dismissNotification}
                className="text-white font-bold hover:text-gray-200"
              >
                ✕
              </button>
            </div>
          )}
          <div className="flex-1">
            {!isProcrastinationOn && (
              <div className="relative group mb-6 text-center">
                <button
                  onClick={startProcrastination}
                  className="px-6 py-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shadow-md"
                >
                  Start 360° Procrastination
                </button>
                <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2">
                  Activate spinning ring around webcam
                </span>
              </div>
            )}
            <h3 className="text-4xl font-bold text-gray-800 mb-6 text-center">IT Quiz Challenge</h3>
            <div className="text-lg font-semibold text-red-600 mb-6 text-center">Time Left: {formatTime(timeLeft)}</div>
            {verificationFailed ? (
              <div className="text-center space-y-6">
                <h4 className="text-2xl font-semibold text-red-700">Verification Failed</h4>
                <p className="text-lg text-gray-600">{message}</p>
                <button
                  onClick={handleRetake}
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-md"
                >
                  Restart
                </button>
              </div>
            ) : !quizFinished ? (
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-gray-700">
                  Question {currentQuestion + 1} of {quizQuestions.length}: {quizQuestions[currentQuestion].question}
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        answers[currentQuestion]?.includes(option)
                          ? 'bg-blue-600 text-white border-blue-700'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                      onClick={() => handleAnswerSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleNextQuestion}
                  className={`w-full py-3 rounded-lg text-white font-semibold transition-colors duration-300 ${
                    !answers[currentQuestion]?.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                  disabled={!answers[currentQuestion]?.length}
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Submit Quiz'}
                </button>
              </div>
            ) : (
              <div className="text-center space-y-6 animate-fade-in">
                <h4 className="text-2xl font-semibold text-gray-700">Quiz Completed!</h4>
                <p className="text-lg text-gray-600">Your score: {score} out of {quizQuestions.length}</p>
                <p className="text-lg text-gray-600">Percentage: {((score / quizQuestions.length) * 100).toFixed(2)}%</p>
                <button
                  onClick={handleRetake}
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-md"
                >
                  Restart Quiz
                </button>
              </div>
            )}
          </div>
          <div className="w-full md:w-80 flex flex-col items-center relative">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Live Verification</h4>
            <div
              ref={webcamContainerRef}
              className={`${styles.webcamContainer} transform transition-transform duration-200 ease-out scale-95 hover:scale-100 hover:shadow-2xl`}
              style={{ position: 'absolute', left: position.x, top: position.y, cursor: isDragging ? 'grabbing' : 'grab' }}
              onMouseDown={handleMouseDown}
            >
              {isProcrastinationOn && (
                <div
                  className={`${styles.procrastinationRing} absolute inset-0 rounded-full border-4 border-dashed border-purple-500 animate-spin`}
                  style={{ animationDuration: `${10 / rotationSpeed}s` }}
                ></div>
              )}
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="rounded-lg border-4 border-blue-200 shadow-md"
                mirrored
                videoConstraints={{
                  width: 320,
                  height: 240,
                  facingMode: 'user',
                }}
              />
            </div>
            <div className="mt-80 flex flex-col items-center space-y-4">
              {!isProcrastinationOn && (
                <div className="relative group">
                  <button
                    onClick={startProcrastination}
                    className="px-6 py-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shadow-md"
                  >
                    Start 360° Procrastination
                  </button>
                  <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2">
                    Activate spinning ring around webcam
                  </span>
                </div>
              )}
              {isProcrastinationOn && (
                <div className="flex flex-col items-center">
                  <label className="text-sm font-medium text-gray-600 mb-1">Rotation Speed</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={rotationSpeed}
                    onChange={handleSpeedChange}
                    className="w-48 accent-blue-500"
                  />
                </div>
              )}
              <p className="text-sm text-gray-500">Keep your face visible for continuous verification. Drag to move the webcam.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

async function compareFacesFacePlusPlus(
  imageBase64_1: string,
  imageBase64_2: string
): Promise<{ isVerified: boolean; confidence: number }> {
  const url = 'https://api-us.faceplusplus.com/facepp/v3/compare';
  const base64_1 = imageBase64_1.split(',')[1];
  const base64_2 = imageBase64_2.split(',')[1];

  const formData = new FormData();
  formData.append('api_key', FACEPP_API_KEY);
  formData.append('api_secret', FACEPP_API_SECRET);
  formData.append('image_base64_1', base64_1);
  formData.append('image_base64_2', base64_2);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    return {
      isVerified: data.confidence && data.confidence > 85,
      confidence: data.confidence ? data.confidence : 0,
    };
  } catch (error) {
    return { isVerified: false, confidence: 0 };
  }
}

export default FaceVerification;