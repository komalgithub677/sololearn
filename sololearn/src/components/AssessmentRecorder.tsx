
import React, { useEffect, useRef } from "react";

interface Props {
  active: boolean;
}

const AssessmentRecorder: React.FC<Props> = ({ active }) => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunks = useRef<Blob[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recordingStarted = useRef(false);

  const startRecording = async () => {
    if (recordingStarted.current) return;
    recordingStarted.current = true;

    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      const webcamStream = await navigator.mediaDevices.getUserMedia({ video: true });

      const screenVideo = document.createElement("video");
      const webcamVideo = document.createElement("video");

      screenVideo.srcObject = screenStream;
      webcamVideo.srcObject = webcamStream;

      screenVideo.muted = true;
      webcamVideo.muted = true;

      await screenVideo.play();
      await webcamVideo.play();

      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      canvas.width = 1280;
      canvas.height = 720;

      const drawFrame = () => {
        try {
          ctx.drawImage(screenVideo, 0, 0, canvas.width, canvas.height);
          ctx.drawImage(webcamVideo, canvas.width - 200, canvas.height - 150, 200, 150);
        } catch (err) {
          console.warn("drawImage error:", err);
        }
        animationFrameId.current = requestAnimationFrame(drawFrame);
      };
      drawFrame();

      const canvasStream = canvas.captureStream(30);
      streamRef.current = canvasStream;

      mediaRecorderRef.current = new MediaRecorder(canvasStream, {
        mimeType: "video/webm;codecs=vp9",
      });

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) recordedChunks.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(recordedChunks.current, { type: "video/webm" });
        const formData = new FormData();
        formData.append("video", blob, "recorded_video.webm");

        try {
          const res = await fetch("http://localhost:3000/api/videos/upload", {
            method: "POST",
            body: formData,
          });
          const msg = await res.text();
          console.log("Upload success:", msg);
        } catch (err) {
          console.error("Upload failed", err);
        }

        recordedChunks.current = [];
        recordingStarted.current = false;
      };

      mediaRecorderRef.current.start();
    } catch (err) {
      console.error("Recording setup failed:", err);
      recordingStarted.current = false;
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    if (!active) return;

    const start = async () => {
      try {
        setTimeout(() => {
          document.documentElement.requestFullscreen?.();
        }, 300);
        await startRecording();
      } catch (e) {
        console.error("Fullscreen or recording start failed", e);
      }
    };

    start();

    const handleAssessmentEnd = () => stopRecording();
    window.addEventListener("assessmentSubmitted", handleAssessmentEnd);

    return () => {
      stopRecording();
      window.removeEventListener("assessmentSubmitted", handleAssessmentEnd);
    };
  }, [active]);

  return <canvas ref={canvasRef} style={{ display: "none" }} />;
};

export default AssessmentRecorder;
