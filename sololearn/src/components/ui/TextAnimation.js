import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TextAnimation.css"; 

const roles = ["Accountants", "Designers", "Delivery Drivers", "Product Managers","Baristas","IT Coordinators","Construction Workers"];

const TextAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <span className="text">We have helped hundreds of </span>
      <span className="animated-text">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="text"> to finally </span>
      <span className="bold-text">land a dream job</span>.
    </div>
  );
};

export default TextAnimation;

