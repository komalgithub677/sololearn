import React, { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react';
import './AadhaarKycForm.css';
import Navbar from './NavBarP';
import FooterP from './FooterP';

const AadhaarKycForm: React.FC = () => {
  const [aadhaar, setAadhaar] = useState<string>('');
  const [capturedImage, setCapturedImage] = useState<Blob | null>(null);
  const [cameraActive, setCameraActive] = useState<boolean>(true);
  const [result, setResult] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Start camera on mount
useEffect(() => {
  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraActive(true);
    } catch (err) {
      console.error("Camera error:", err);
      alert("Please allow camera access.");
    }
  };

  start();

  const handleVisibilityChange = () => {
    if (document.hidden) {
      stopCamera(); // Stop camera when tab is inactive
    } else if (!cameraActive && !capturedImage) {
      startCamera(); // Restart only if user hasn't captured image yet
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);

  return () => {
    stopCamera(); // Clean up when component unmounts
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}, []);


const stopCamera = () => {
  try {
    const video = videoRef.current;
    const stream = streamRef.current;

    if (video) {
      video.pause();
      video.srcObject = null;
    }

    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop(); // Stops each track
      });

      streamRef.current = null;
    }

    setCameraActive(false);

    // Debug confirmation
    console.log("Camera stopped, stream cleared");
  } catch (err) {
    console.error("Error stopping camera:", err);
  }
};

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraActive(true);
    } catch (err) {
      console.error('Camera start error:', err);
      alert("Could not access camera.");
    }
  };

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            setCapturedImage(blob);
            stopCamera(); // Stop after capture
          }
        }, 'image/jpeg');
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!aadhaar.match(/^[0-9]{12}$/)) {
    alert("Please enter a valid 12-digit Aadhaar number.");
    return;
  }

  if (!capturedImage) {
    alert("Please capture your selfie first.");
    return;
  }

  const formData = new FormData();
  formData.append('aadhaarNumber', aadhaar);
  formData.append('selfie', capturedImage, 'selfie.jpg');

  try {
    const res = await fetch('http://localhost:3000/api/kyc', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setResult('✅ Face Match Successful. Redirecting to homepage...');
      
      // ✅ Redirect after 2s
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } else {
      setResult(`❌ Face Match Failed. Score: ${data.score || 'N/A'}\n${data.message}`);
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  } catch (error) {
    console.error(error);
    setResult('❌ Error verifying identity.');
  }
};

  return (
    <>
    <div className="aadhaar-container">
      <Navbar/>
      <h3>Login to Aadhaar via Selfie</h3>
      <form onSubmit={handleSubmit} className="aadhaar-form">
        <input
          type="text"
          placeholder="Enter Aadhaar Number"
          maxLength={12}
          pattern="[0-9]{12}"
          required
          value={aadhaar}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAadhaar(e.target.value)}
        />

        <div className="camera-section">
          {cameraActive && (
            <video ref={videoRef} autoPlay playsInline muted />
          )}

          {!capturedImage && cameraActive && (
            <button type="button" onClick={handleCapture}>
              Capture Selfie
            </button>
          )}

          {capturedImage && (
            <>
              <img src={URL.createObjectURL(capturedImage)} alt="Captured selfie" />
              </>
          )}
        </div>

        <button type="submit" disabled={!capturedImage}>Login With Selfie</button>

        {result && <p className="result">{result}</p>}
      </form>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
    <FooterP/>
    </>

  );
};

export default AadhaarKycForm;
