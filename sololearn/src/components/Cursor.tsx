
import React, { useState, useEffect } from 'react';
import { useMouseFollow } from '@/lib/animations';

const Cursor: React.FC = () => {
  const position = useMouseFollow();
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    // Show custom cursor after a brief delay
    const timer = setTimeout(() => {
      setIsCursorVisible(true);
    }, 100);

    // Track hoverable elements
    const hoverableElements = document.querySelectorAll('a, button, [role="button"]');
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    
    hoverableElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      clearTimeout(timer);
      document.body.style.cursor = 'auto';
      
      hoverableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isCursorVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div 
        className="custom-cursor fixed w-8 h-8 bg-white rounded-full z-[9999] mix-blend-difference pointer-events-none"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          transition: 'transform 0.1s ease-out, width 0.3s, height 0.3s',
          ...(isHovering ? { width: '50px', height: '50px', transform: `translate(${position.x - 25}px, ${position.y - 25}px)` } : {})
        }}
      />
      
      {/* Trailing effect */}
      <div 
        className="custom-cursor fixed w-40 h-40 rounded-full z-[9998] mix-blend-difference pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
          transform: `translate(${position.x - 80}px, ${position.y - 80}px)`,
          transition: 'transform 0.25s ease-out'
        }}
      />
    </>
  );
};

export default Cursor;
