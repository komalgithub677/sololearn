import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  userId?: string;
  email?: string;
  assessmentId?: string | null;
};

const GeolocationTracker: React.FC<Props> = ({
  userId,
  email,
  assessmentId = null,
}) => {
  const [status, setStatus] = useState("Securely tracking your location...");
  const [alertMessage, setAlertMessage] = useState("");

  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const resolvedUserId = userId || userData?._id || "";
  const resolvedEmail = email || userData?.email || "";

  const apiUrl =
    import.meta.env.VITE_API_URL || "http://localhost:3000/api/location";

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setStatus("❌ Geolocation not supported.");
      setAlertMessage("❌ Your browser does not support geolocation.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setStatus(" Sending location to server...");

          const res = await axios.post(
            apiUrl,
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              userId: resolvedUserId,
              email: resolvedEmail,
              assessmentId,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          setStatus(` ${res.data.message}`);
          setAlertMessage("You are accessing from an allowed region.");
        } catch (err: any) {
          const errorMsg = err.response?.data?.error || "Server Error";
          setStatus(`❌ ${errorMsg}`);

          if (err.response?.status === 423) {
            setAlertMessage(`❌ Access denied: ${errorMsg}`);
          } else {
            setAlertMessage("❌ Failed to verify location.");
          }

          console.error("❌ Error posting location:", err);
        }
      },
      (error) => {
        console.warn("❌ Geolocation error:", error.message);
        setStatus("❌ Location permission denied.");
        setAlertMessage("❌ Location access was denied.");
      }
    );
  }, [resolvedUserId, resolvedEmail, assessmentId]);

  return (
    <div className="text-sm text-center text-gray-400 mt-2">
      {/* UI messages removed */}
    </div>
  );
};

export default GeolocationTracker;
