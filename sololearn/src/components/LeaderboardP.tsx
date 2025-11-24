import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Code2, Search, Menu, X, Sun, Moon, Bell, User, BookOpen, Rocket, GraduationCap, Trophy, Code, MessageCircle, PenTool, LogOut } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import axios from "axios";
import NavBarP from "./NavBarP";
import FooterP from "./FooterP";

interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  email: string;
  totalXP: number;
  totalLessons: number;
  isPro?: boolean;
}



export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/leaderboard");
        const updatedData = response.data.map((user: LeaderboardUser, index: number) => ({
          ...user,
          isPro: index === 0, // Mark the top user as PRO for demo
        }));
        setLeaderboard(updatedData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load leaderboard data.");
        setLoading(false);
        console.error("Error fetching leaderboard:", err);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <>
    <NavBarP/>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-white">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Leaderboard
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Leaderboard Card */}
          <div className="flex-1 bg-[rgba(255,255,255,0.89)] rounded-2xl shadow-lg">
            {loading ? (
              <p className="text-black text-center py-6">Loading leaderboard...</p>
            ) : error ? (
              <p className="text-black text-center py-6">{error}</p>
            ) : leaderboard.length === 0 ? (
              <p className="text-black text-center py-6">No users found on the leaderboard.</p>
            ) : (
              <AnimatePresence>
                {leaderboard.map((user) => (
                  <motion.div
                    key={user.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                  >
                    <span className="w-8 text-black-400 font-medium text-lg">{user.rank}</span>
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-[rgba(255,255,255,0.89)] flex items-center justify-center mr-4">
                      <span className="text-lg font-semibold text-black">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-black font-medium text-lg">{user.name}</span>
                        {user.isPro && (
                          <span className="bg-orange-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                            PRO
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-500 font-bold text-lg">
                      {user.totalXP} XP
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[448px] space-y-6">
            {/* Mercury League Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-black">Mercury League</h3>
                <span className="text-sm text-black">Ends in 19h</span>
              </div>
              <div className="flex justify-between">
                <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
              </div>
            </div>

            {/* Earn XP Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">Earn XP</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-300 rounded-lg">
                  <span className="text-black">Complete a lesson</span>
                  <div className="flex items-center gap-2">
                    <span className="text-black font-medium">+10 XP</span>
                    <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">→</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-300 rounded-lg">
                  <span className="text-black">Achieve your Daily Learning Goal</span>
                  <div className="flex items-center gap-2">
                    <span className="text-black font-medium">+6 XP</span>
                    <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">→</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-300 rounded-lg">
                  <span className="text-black">Solve a Code Coach</span>
                  <div className="flex items-center gap-2">
                    <span className="text-black font-medium">+5 XP</span>
                    <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <FooterP/>
    </>
  );
}