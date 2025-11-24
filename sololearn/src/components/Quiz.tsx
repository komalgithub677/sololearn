import React, { useState, useRef, useEffect } from 'react';
import { transcribeAudio } from '../utils/audio';


const questions = [
  { q: 'What is 2+2?', options: ['3', '4', '5', '6'], answer: '4' },
  { q: 'Capital of France?', options: ['Rome', 'Paris', 'Berlin', 'Madrid'], answer: 'Paris' },
  { q: 'Color of the sky?', options: ['Blue', 'Red', 'Green', 'Yellow'], answer: 'Blue' },
  { q: '5 * 3 = ?', options: ['8', '15', '10', '20'], answer: '15' },
  { q: 'Water freezes at?', options: ['0°C', '100°C', '50°C', '25°C'], answer: '0°C' },
];

const Quiz: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState('');

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    const startProctoring = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (e: BlobEvent) => {
          if (e.data.size > 0) {
            audioChunksRef.current.push(e.data);
          }
        };

        mediaRecorder.start();
        setRecording(true);
        console.log('🎙️ Recording started');
      } catch (err) {
        console.error('Mic permission error:', err);
        alert('Microphone permission denied.');
      }
    };

    startProctoring();
  }, []);

  const handleNext = async () => {
    const isCorrect = selected === questions[index].answer;
    const updatedScore = score + (isCorrect ? 1 : 0);

    if (index < questions.length - 1) {
      setScore(updatedScore);
      setIndex(i => i + 1);
      setSelected('');
    } else {
      // LAST question → stop recording
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
        setRecording(false);

        mediaRecorderRef.current.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          try {
            const text = await transcribeAudio(audioBlob);
            setTranscript(text);
          } catch (err) {
            console.error('❌ Transcription failed:', err);
            alert('Failed to get transcript.');
          }
        };
      }

      alert(`✅ Quiz finished!\nYour score: ${updatedScore}/${questions.length}`);
      setScore(updatedScore);
      setSelected('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 py-8">
      <div className="bg-white shadow-xl rounded-lg max-w-md w-full p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">🎓 Audio Proctoring Quiz</h1>

        <div className="bg-blue-50 border border-blue-300 rounded-md p-4 mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Q{index + 1}. {questions[index].q}
          </p>
          <div className="space-y-2">
            {questions[index].options.map((opt) => (
              <label key={opt} className="block text-gray-700">
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!selected}
          className={`w-full py-2 rounded-md text-white font-semibold transition ${
            selected ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {index < questions.length - 1 ? 'Next' : 'Submit'}
        </button>

        {recording && <p className="text-red-600 text-sm mt-3 text-center">🎙️ Recording in progress...</p>}

        {transcript && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">📝 Transcript:</h3>
            <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 whitespace-pre-wrap">{transcript}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
