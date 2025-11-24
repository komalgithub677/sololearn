import React from 'react'; 
import { motion } from 'framer-motion';
import studentsImage from './assets/home-students.jpg'; 
import professionalsImage from './assets/home-professionals.jpg'; 
import './TextAnimation.css';

const MainScreen = () => {
  return (
    <motion.div 
      className="main-screen"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <motion.h1 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.5 }}
        className="main-heading"
      >
        The perfect platform to boost <br /> your technical skills
      </motion.h1>

      <div className="bottom-headings">
        <motion.div 
          className="students-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <img src={studentsImage} alt="Students Learning" className="section-image" />
          <h2 className="students-heading">Students</h2>
          <p className="students-paragraph">
            Prepping for the big test or want to ace your first <br />interview? 
            Use Sololearn's real-world practice to<br /> reinforce what you've learned 
            and get you ready for <br />that big moment.
          </p>
          <button className="learn-button">Learn for free</button>
        </motion.div>

        <motion.div 
          className="professionals-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <img src={professionalsImage} alt="Professionals Working" className="section-image" />
          <h2 className="professionals-heading">Professionals</h2>
          <p className="professionals-paragraph"> You can learn something totally new to advance your career. <br />
            Or maybe you just want to knock off the rust. <br />
            Try Sololearn to get access to a variety of courses, <br />
            from machine learning to web development.
          </p>
          <button className="boost-button">Boost your career</button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainScreen;
