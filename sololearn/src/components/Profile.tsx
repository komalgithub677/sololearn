import { Star, PlayCircle, PlusCircle } from "lucide-react";
import { IN } from "country-flag-icons/react/3x2";
import { Gift, Zap } from "lucide-react";
import React, {FC,useState, useEffect} from "react";
import Navbar from "../components/NavBarP";
import axios from 'axios';
import FooterP from "./FooterP";

interface StreakTrackerProps{
  userId: string, 
}


function Profile(){
  const userId = localStorage.getItem("userId"); //Get User Id here

  if (!userId) {
   return <div className="text-white text-center mt-10">
    Please <a className="underline text-blue-500" href="/Login">login</a> to view your profile.
  </div>;
  }
  return <>
    <div className="w-screen max-w-[99.9%] min-h-[99%] overflow-x-hidden relative">
      <Navbar/>
      <div className=" absolute h-[110%] w-[140vw] -z-10 top-[-160vh] right-[-20vw] bg-gray-700 rounded-[48%]" />
      <div className="min-h-screen w-[60%] ml-[20%] mt-[6%] flex-col gap-1 items-center">
        <ProfileHeader />
        <ProBanner />
        <StreakTracker userId={userId}/>
        <Dashboard />
      </div>
    </div>
    <FooterP/>
  </>
}

const ProfileHeader = () => {
  // Retrieve data from localStorage on component mount
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const savedData = localStorage.getItem('userData');

    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  // Fallback if data isn't loaded yet
  if (!userData) {
    return <div className="w-full text-white py-10 px-5 rounded-b-3xl text-center">Loading...</div>;
  }

  return (
    <div className="w-full text-white py-10 px-5 rounded-b-3xl text-center">
      <div className="flex gap-[4%]">
        <img 
          height={120} 
          width={120} 
          src={userData.profilePicture || "https://imgcdn.stablediffusionweb.com/2024/9/24/ed4d3b06-90f7-4d8d-ae20-9e6059147870.jpg"} 
          alt="profile" 
          className="rounded-full w-[18%]" 
        />
        <div className="text-left font-bold">
          <h2 className="text-2xl">{userData.name || "Anonymous"}</h2>
          <p className="flex items-center gap-2 mt-[4%]">
            <span className="text-gray-200 cursor-pointer hover:text-white">
              {userData.following?.length || 0} Following
            </span>
            <span className="text-white cursor-default">
              {userData.followers?.length || 0} Followers
            </span>
          </p>
          <div className="flex items-center gap-1 mt-[2%]">
            <Star size={20} fill="currentColor" className="text-yellow-500" />
            <span className="text-lg">{userData.xp || 0} XP</span>
          </div>
          <p className="flex items-center gap-2 mt-[2%]">
            <IN title={userData.country || "Unknown"} className="h-3" />
            {userData.country || "Unknown"} • Lvl {userData.level || 1}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProBanner = () => {
  return (
    <div className="bg-[#020C1B] flex justify-between items-center p-5 rounded-lg shadow-lg w-full mb-3">
      {/* Left Section: Logo and Text */}
      <div className="flex items-center gap-2">
        <span className="text-white text-lg font-semibold">Sololearn</span>
        <span className="bg-yellow-500 text-black text-sm font-bold px-2 py-1 rounded">
          PRO
        </span>
      </div>

      {/* Middle Section: Code Snippet Icon */}
      <div className="bg-[#1C2836] p-5 rounded-md shadow-md border border-gray-700">
        <div className="w-20 h-15 flex flex-col gap-1">
          <div className="w-full h-1 bg-yellow-500"></div>
          <div className="w-3/4 h-1 bg-white"></div>
          <div className="w-full h-1 bg-yellow-500"></div>
          <div className="w-2/3 h-1 bg-white"></div>
        </div>
      </div>

      {/* Right Section: Button */}
      <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition-all">
        Start Today
      </button>
    </div>
  );
};

const StreakTracker: FC<StreakTrackerProps> = ({ userId }) => {
  const [streak, setStreak] = useState<{
    currentStreak: number;
    longestStreak: number;
    streakSaversUsed: number;
  } | null>(null);

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/users/${userId}`);
        setStreak(res.data.streak);
      } catch (error) {
        console.error("Failed to fetch streak:", error);
      }
    };

    fetchStreak();
  }, [userId, refresh]);

const handleUseStreakSaver = async () => {
  try {
    const res = await axios.post("http://localhost:3000/api/streak-saver", { userId: userId });
    
    // Backend returns 200 even if no 'success' key; so check message
    if (res.status === 200) {
      alert(res.data.message || "Streak Saver used successfully!");
      setRefresh(prev => prev + 1); // Trigger data refresh to update UI
    } else {
      alert("Failed to use Streak Saver.");
    }
  } catch (error) {
    // Show backend error message if available, else generic message
    const errMsg = error.response?.data?.message || "Error using Streak Saver.";
    alert(errMsg);
    console.error("Streak Saver error:", error);
  }
};


  if (!streak) {
    return <div className="text-center text-gray-500">Loading streak data...</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900">Streak</h2>

      <div className="flex items-center gap-4 mt-4">
        <div className="flex gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                i < streak.currentStreak ? "bg-yellow-400" : "bg-gray-200"
              }`}
            >
              <Gift
                size={20}
                className={i < streak.currentStreak ? "text-white" : "text-gray-400"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-300 my-4"></div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Current Streak</p>
          <p className="text-lg font-bold text-gray-900 flex items-center">
            <Zap size={16} className="text-green-500 mr-1" />
            {streak.currentStreak} days
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Longest Streak</p>
          <p className="text-lg font-bold text-gray-900 flex items-center">
            <Zap size={16} className="text-orange-500 mr-1" />
            {streak.longestStreak} days
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Streak Saver</p>
          <p className="text-lg font-bold text-gray-900 flex items-center">
            <Zap size={16} className="text-blue-500 mr-1" />
            {streak.streakSaversUsed ?? 0} of 3
          </p>
        </div>
      </div>

      {/* ✅ Streak Saver Button */}
      <button
        className="w-full mt-4 px-4 py-2 text-blue-600 border border-blue-400 rounded-lg hover:bg-blue-50 transition"
        onClick={handleUseStreakSaver}
      >
        Get Streak Saver
      </button>
    </div>
  );
};


const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Courses Progress */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Courses Progress</h2>
          <a href="#" className="text-blue-500 text-sm">Manage</a>
        </div>
        <div className="mt-4 space-y-4">
          {[
            { name: "Python Core", color: "bg-navy-800", icon: "🐍" },
            { name: "HTML", color: "bg-orange-500", icon: "🌐" },
            { name: "CSS", color: "bg-blue-500", icon: "🎨" }
          ].map((course, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className={`${course.color} w-10 h-10 flex items-center justify-center rounded-full text-white text-lg`}>
                  {course.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{course.name}</p>
                  <p className="text-gray-500 text-sm">Complete</p>
                </div>
              </div>
              <PlayCircle size={20} className="text-blue-500" />
            </div>
          ))}
        </div>
        <button className="w-full mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
          Browse Courses
        </button>
      </div>

      {/* Recent Achievements & Next Task */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900">Recent Achievements</h2>
        <div className="flex gap-3 mt-3">
          {["bg-teal-500", "bg-blue-500", "bg-green-500", "bg-purple-500"].map((color, index) => (
            <div key={index} className={`${color} w-10 h-10 rounded-lg`}></div>
          ))}
        </div>
        <h3 className="mt-4 font-semibold text-gray-900">Next Task</h3>
        <div className="flex items-center gap-3 mt-2">
          <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
          <div>
            <p className="font-semibold text-gray-800">Just Getting Started</p>
            <p className="text-gray-500 text-sm">Win a challenge</p>
          </div>
        </div>
        <button className="w-full mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
          See More
        </button>
      </div>

      {/* Certificates */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900">Certificates</h2>
        <div className="flex gap-3 mt-3">
          {["bg-orange-500", "bg-blue-500", "bg-navy-800"].map((color, index) => (
            <div key={index} className={`${color} w-20 h-12 rounded-lg flex items-center justify-center text-white text-lg`}>
              {index === 0 ? "HTML" : index === 1 ? "CSS" : "Python"}
            </div>
          ))}
        </div>
      </div>

      {/* Code Bits */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Code Bits</h2>
          <a href="#" className="text-blue-500 text-sm">Manage</a>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <div className="w-14 h-10 bg-red-500 text-white flex items-center justify-center rounded-lg font-semibold">
            Web
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">05/14/2022 17:44</p>
            <p className="text-gray-500 text-xs">Edited 2 years ago</p>
          </div>
        </div>
        <button className="w-full mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2">
          <PlusCircle size={16} />
          Add New
        </button>
      </div>
    </div>
  );
};

export default Profile;

