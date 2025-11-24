import React, { useEffect, useRef, useState } from 'react';

// Extend window object to include snapshot functions
declare global {
  interface Window {
    /** Start captures and optional preview, and auto-stop after duration */
    triggerWebcamSnapshot?: (showPreview?: boolean, durationMs?: number) => void;
    /** Stop captures and hide preview */
    stopWebcamSnapshot?: () => void;
  }
}

export function WebcamCaptureLocal() {
  const [showPreview, setShowPreview] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const startWebcam = async () => {
    try {
        console.log('camera is start')
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) {
      console.error('Error accessing webcam:', err);
    }
  };

  const captureAndDownload = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
    if (blob) {
      uploadBlobToServer(blob);
    }
  }, 'image/jpeg');

  };

const uploadBlobToServer = async (blob: Blob) => {
  try {
    const formData = new FormData();
    formData.append('image', blob, `snapshot_${Date.now()}.jpg`);

    const response = await fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: formData, // No need for headers
    });

    const result = await response.json();
    console.log('Server response:', result);
  } catch (err) {
    console.error('Upload failed:', err);
  }
};



  useEffect(() => {
    window.triggerWebcamSnapshot = (preview = true, durationMs = 0) => {
      // Always show live preview when triggering
      setShowPreview(true);
      startWebcam().then(() => {
        captureAndDownload();
        if (intervalRef.current === null) {
          intervalRef.current = window.setInterval(captureAndDownload, 15000);
        }
        if (durationMs > 0) {
          timeoutRef.current = window.setTimeout(() => {
            window.stopWebcamSnapshot?.();
          }, durationMs);
        }
      });
    };

    window.stopWebcamSnapshot = () => {
         console.log('camera turned off')
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
        streamRef.current = null;
      }
      setShowPreview(false);
    };

    return () => {
      window.stopWebcamSnapshot?.();
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          display: showPreview ? 'block' : 'none',
          width: '500px',
          borderRadius: 8,
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        }}
      />
      {/* Hidden canvas for snapshots */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </>
  );
}

export default WebcamCaptureLocal;
