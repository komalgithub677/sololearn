import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Play, Star, Flame, Trophy, Medal, Award, Crown, ChevronUp, ChevronDown, Gift, User, Users, UserCheck, Target, Sparkles } from 'lucide-react';

const Leaderboard = () => {
  // State for interactive elements
  const [activeTab, setActiveTab] = useState('global');
  const [expandedTask, setExpandedTask] = useState<number | null>(null);
  const [hoveredUser, setHoveredUser] = useState<number | null>(null);
  const [currentXP, setCurrentXP] = useState(85);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Leaderboard data
  const leaderboardData = [
    { id: 1, name: 'Abhishek', xp: '120 XP', streaks: 447, language: 'Python', level: 12, rankChange: 'up' },
    { id: 2, name: 'Jaiden', xp: '110 XP', streaks: 703, language: 'JavaScript', level: 10, rankChange: 'same' },
    { id: 3, name: 'Emily', xp: '110 XP', streaks: 154, language: 'Java', level: 11, rankChange: 'down' },
    { id: 4, name: 'John Cena', xp: '95 XP', streaks: 321, language: 'C++', level: 9, rankChange: 'up' },
    { id: 5, name: 'Sara Kim', xp: '85 XP', streaks: 112, language: 'React', level: 8, rankChange: 'up' },
  ];

  // Filtered leaderboard data
  const filteredLeaderboardData = leaderboardData.filter(user => {
    if (searchQuery) {
      return user.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  // Top users
  const topUsers = [
    { id: 1, name: 'Jaiden', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', badge: 'silver', level: 15, totalXP: 4502 },
    { id: 2, name: 'John Cena', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', badge: 'gold', level: 23, totalXP: 8754 },
    { id: 3, name: 'Emily', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', badge: 'bronze', level: 14, totalXP: 3956 },
  ];

  // League data
  const leagueData = [
    { id: 1, name: 'Mercury', avatar: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', type: 'planet', users: 245, minXP: 1000 },
    { id: 2, name: 'Saturn', avatar: 'https://images.unsplash.com/photo-1614314169000-4c4331e04018?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', type: 'empty', users: 0, minXP: 2500 },
    { id: 3, name: 'Jupiter', avatar: 'https://images.unsplash.com/photo-1639925176350-1c99986cbd47?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', type: 'empty', users: 0, minXP: 5000 },
  ];

  // Tasks
  const tasks = [
    { 
      id: 1, 
      name: 'Complete Python Basics', 
      xp: 20, 
      description: 'Finish at least 3 lessons in the Python basics module',
      progress: 67,
      estimatedTime: '15 min',
      tags: ['beginner', 'python']
    },
    { 
      id: 2, 
      name: 'Daily Coding Challenge', 
      xp: 15, 
      description: 'Solve today\'s coding problem',
      progress: 0,
      estimatedTime: '10 min',
      tags: ['challenge', 'algorithm']
    },
    { 
      id: 3, 
      name: 'Complete a Project', 
      xp: 50, 
      description: 'Finish and submit a project from the project library',
      progress: 25,
      estimatedTime: '2 hours',
      tags: ['project', 'advanced']
    },
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', label: 'All' },
    { id: 'python', label: 'Python' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'java', label: 'Java' },
  ];

  // Simulate XP increase when completing a task
  const completeTask = (taskId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      setCurrentXP(prev => prev + task.xp);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  // Render confetti
  const renderConfetti = () => {
    if (!showConfetti) return null;
    
    return (
      <div className="confetti-container">
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 10 + 5;
          const left = Math.random() * 100 + '%';
          const animDuration = Math.random() * 3 + 2;
          const delay = Math.random() * 0.5;
          const color = ['#FFD700', '#FF6347', '#4169E1', '#32CD32', '#FF69B4'][Math.floor(Math.random() * 5)];
          
          return (
            <div 
              key={i}
              className="confetti-piece"
              style={{
                width: size + 'px',
                height: size + 'px',
                left: left,
                backgroundColor: color,
                animationDuration: `${animDuration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Confetti Effect */}
      {renderConfetti()}

      {/* Main Content */}
      <div className="main-content">
        <div className="container">
          <motion.div 
            className="page-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="header-content">
              <Trophy size={36} className="header-icon" />
              <h1 className="header-title">Leaderboard</h1>
            </div>
            <div className="header-quote">
              <Sparkles size={16} className="quote-icon" />
              <span>"Competing with others is good, but competing with yourself is better."</span>
            </div>
          </motion.div>

          <div className="content-row">
            {/* Left Section - Leaderboard */}
            <motion.div 
              className="section leaderboard-section"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="section-header">
                <h2 className="section-title">Rankings</h2>
                <div className="tab-switcher">
                  <button 
                    className={`tab-btn ${activeTab === 'global' ? 'active' : ''}`}
                    onClick={() => setActiveTab('global')}
                  >
                    <Users size={16} className="tab-icon" />
                    Global
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'friends' ? 'active' : ''}`}
                    onClick={() => setActiveTab('friends')}
                  >
                    <UserCheck size={16} className="tab-icon" />
                    Friends
                  </button>
                </div>
              </div>
              
              {/* Search and Filter Bar */}
              <div className="search-filter-bar">
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="filter-buttons">
                  {filterOptions.map(option => (
                    <button
                      key={option.id}
                      className={`filter-btn ${selectedFilter === option.id ? 'active' : ''}`}
                      onClick={() => setSelectedFilter(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Top Users */}
              <div className="top-users-container">
                <h3 className="section-subtitle">Top Performers</h3>
                <div className="top-users">
                  {topUsers.map((user, index) => (
                    <motion.div 
                      key={user.id} 
                      className="top-user"
                      onMouseEnter={() => setHoveredUser(user.id)}
                      onMouseLeave={() => setHoveredUser(null)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="ranking-badge">
                        {index === 0 ? <Crown size={16} className="crown-icon" /> : (index + 1)}
                      </div>
                      <div className="avatar-container">
                        <motion.img 
                          src={user.avatar} 
                          alt={user.name} 
                          className={`user-avatar ${hoveredUser === user.id ? 'active' : ''}`}
                          whileHover={{ scale: 1.05 }}
                        />
                        <div className={`badge ${user.badge}`}>
                          <Star size={16} className="badge-icon" />
                        </div>
                        {hoveredUser === user.id && (
                          <motion.div 
                            className="user-tooltip"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                          >
                            <div className="tooltip-content">
                              <div className="tooltip-name">{user.name}</div>
                              <div className="tooltip-level">Level {user.level}</div>
                              <div className="tooltip-xp">XP: {user.totalXP.toLocaleString()}</div>
                              <div className="tooltip-badge">
                                <Medal size={14} className="badge-icon-small" />
                                <span className="badge-text">{user.badge.charAt(0).toUpperCase() + user.badge.slice(1)}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                      <span className="user-name">{user.name}</span>
                      <span className="user-level">Level {user.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Leaderboard Table */}
              <div className="leaderboard-table-container">
                <table className="leaderboard-table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>User</th>
                      <th>XP</th>
                      <th>Streaks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeaderboardData.map((item, index) => (
                      <motion.tr 
                        key={item.id} 
                        className="leaderboard-row"
                        onClick={() => alert(`Viewing ${item.name}'s profile`)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        whileHover={{ backgroundColor: '#f7fafc' }}
                      >
                        <td className="rank-cell">
                          <div className="rank-value">{item.id < 10 ? `0${item.id}` : item.id}</div>
                          <div className={`rank-change ${item.rankChange}`}>
                            {item.rankChange === 'up' ? (
                              <ChevronUp size={14} className="rank-icon up" />
                            ) : item.rankChange === 'down' ? (
                              <ChevronDown size={14} className="rank-icon down" />
                            ) : (
                              <div className="rank-dot" />
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="user-cell">
                            <div className="user-avatar-small-container">
                              <img 
                                src={`https://randomuser.me/api/portraits/men/${30 + item.id}.jpg`} 
                                alt={item.name} 
                                className="user-avatar-small" 
                              />
                              <div className="online-indicator-small"></div>
                            </div>
                            <div className="user-info">
                              <div className="user-name-table">{item.name}</div>
                              <div className="user-details">{item.language} • Lvl {item.level}</div>
                            </div>
                          </div>
                        </td>
                        <td className="xp-cell">{item.xp}</td>
                        <td>
                          <div className="streak-cell">
                            <Flame size={16} className="fire-icon" />
                            <div className="streak-count">{item.streaks}</div>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="pagination">
                <button className="pagination-btn prev">Previous</button>
                <div className="pagination-numbers">
                  <button className="page-number active">1</button>
                  <button className="page-number">2</button>
                  <button className="page-number">3</button>
                  <span className="ellipsis">...</span>
                  <button className="page-number">10</button>
                </div>
                <button className="pagination-btn next">Next</button>
              </div>
            </motion.div>
            
            {/* Right Section - Your League */}
            <motion.div 
              className="section league-section"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="section-header">
                <h2 className="section-title">Your League</h2>
                <div 
                  className="info-icon"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <Info size={16} />
                  {showTooltip && (
                    <motion.div 
                      className="info-tooltip"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <p>Leagues are groups of users with similar skill levels. Rise through the ranks by earning XP and completing challenges to unlock new planets!</p>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* User Stats */}
              <div className="user-stats">
                <div className="user-stats-header">
                  <div className="user-stats-avatar">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Your Avatar" 
                      className="stats-avatar-img" 
                    />
                    <div className="stats-badge">
                      <Star size={14} className="stats-badge-icon" />
                    </div>
                  </div>
                  <div className="user-stats-info">
                    <h3 className="stats-name">Your Stats</h3>
                    <div className="stats-rank">Rank: #246</div>
                  </div>
                </div>
                
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-value">{currentXP}</div>
                    <div className="stat-label">Current XP</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">42</div>
                    <div className="stat-label">Daily Streak</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">8</div>
                    <div className="stat-label">Your Level</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">75%</div>
                    <div className="stat-label">Completion</div>
                  </div>
                </div>
              </div>
              
              {/* League Progress */}
              <div className="league-progress-container">
                <h3 className="progress-title">League Progress</h3>
                <div className="progress-labels">
                  <span>Current XP: {currentXP}</span>
                  <span>Next League: {leagueData[1].minXP} XP</span>
                </div>
                <div className="progress-bar-container">
                  <motion.div 
                    className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentXP / leagueData[1].minXP) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
                <div className="xp-needed">
                  <Target size={16} className="target-icon" />
                  <span>You need {leagueData[1].minXP - currentXP} more XP to reach Saturn</span>
                </div>
              </div>
              
              {/* League Planets */}
              <div className="league-journey">
                <h3 className="journey-title">Your Journey</h3>
                <div className="planets-container">
                  {leagueData.map((item, index) => (
                    <motion.div 
                      key={item.id} 
                      className="planet-container"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <div className={`planet-connection ${index > 0 ? 'line' : ''}`}></div>
                      <div className={`planet-circle ${item.type === 'planet' ? 'active' : 'inactive'}`}>
                        <motion.img 
                          src={item.avatar}
                          alt={item.name} 
                          className="planet-image"
                          animate={item.type === 'planet' ? { scale: [1, 1.05, 1] } : {}}
                          transition={{ repeat: Infinity, duration: 3 }}
                        />
                      </div>
                      <div className="planet-info">
                        <span className="planet-name">{item.name || "???"}</span>
                        {item.type === 'planet' ? (
                          <div className="planet-users">
                            <Users size={12} className="users-icon" />
                            <span>{item.users} users</span>
                          </div>
                        ) : (
                          <div className="planet-locked">
                            <span>{item.minXP} XP to unlock</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Earn XP Section */}
              <div className="earn-xp-container">
                <h3 className="earn-xp-title">
                  <Gift size={18} className="gift-icon" />
                  Earn XP
                </h3>
                
                <div className="task-filter-buttons">
                  <button className="task-filter-btn active">All</button>
                  <button className="task-filter-btn">Beginner</button>
                  <button className="task-filter-btn">Challenges</button>
                  <button className="task-filter-btn">Projects</button>
                </div>
                
                <div className="tasks-list">
                  {tasks.map((task) => (
                    <motion.div 
                      key={task.id} 
                      className={`task-container ${expandedTask === task.id ? 'expanded' : ''}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * task.id }}
                      layoutId={`task-${task.id}`}
                    >
                      <div className="task-header" onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}>
                        <div className="task-title-container">
                          <span className="task-title">{task.name}</span>
                          <div className="task-meta">
                            <span className="task-xp">+{task.xp} XP</span>
                            <div className="task-tags">
                              {task.tags.map((tag, idx) => (
                                <span key={idx} className="task-tag">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <motion.button 
                          className="task-play-btn"
                          onClick={(e) => completeTask(task.id, e)}
                          whileHover={{ scale: 1.1, backgroundColor: '#F97316' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play size={16} fill="white" />
                        </motion.button>
                      </div>
                      
                      <AnimatePresence>
                        {expandedTask === task.id && (
                          <motion.div 
                            className="task-details"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="task-description">{task.description}</p>
                            <div className="task-progress-container">
                              <div className="progress-labels">
                                <span>Progress</span>
                                <span>{task.progress}%</span>
                              </div>
                              <div className="progress-bar-container">
                                <motion.div 
                                  className="progress-bar task-progress"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${task.progress}%` }}
                                  transition={{ duration: 0.5 }}
                                ></motion.div>
                              </div>
                            </div>
                            <div className="task-footer">
                              <div className="task-time">
                                <span className="time-icon">⏱️</span>
                                <span>{task.estimatedTime}</span>
                              </div>
                              <motion.button 
                                className="task-details-btn"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                                whileTap={{ scale: 0.95 }}
                              >
                                See details
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave Effect */}
        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L80,117.3C160,107,320,85,480,96C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;