import React, { useEffect } from 'react';
import axios from 'axios';

const ScreenShield: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    let lastAttemptTime = 0;

    const blurScreen = async (reason: string) => {
      const now = Date.now();
      if (now - lastAttemptTime < 5000) return;
      lastAttemptTime = now;

      // Show blur overlay
      const overlay = document.createElement('div');
      overlay.id = 'screenshot-overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.zIndex = '9999';
      overlay.style.backdropFilter = 'blur(10px)';
      overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
      overlay.style.pointerEvents = 'none';

      document.body.appendChild(overlay);

      // Remove overlay after 5 seconds
      setTimeout(() => {
        const el = document.getElementById('screenshot-overlay');
        if (el) el.remove();
      }, 5000);

      // Log the attempt to server
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) return;

        await axios.post('http://localhost:3000/api/screenshot-attempt', {
          userId,
          timestamp: new Date().toISOString(),
          reason,
        });
      } catch (err) {
        console.error('Error logging screenshot attempt:', err);
      }
    };

    // Detect PrintScreen and Ctrl+P
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (key === 'printscreen') {
        e.preventDefault();
        blurScreen('PrintScreen key detected');
      }

      if (e.ctrlKey && key === 'p') {
        e.preventDefault();
        blurScreen('Ctrl+P detected');
      }

      // Shift+Win+S cannot be detected directly
    };

    // Detect tab/window switch
    const handleBlur = () => {
      blurScreen('Window/tab blurred — possible screenshot tool (e.g. Shift+Win+S)');
    };

    const handleFocus = () => {
      const el = document.getElementById('screenshot-overlay');
      if (el) el.remove();
    };

    // Detect image pasted from clipboard
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf('image') !== -1) {
            blurScreen('Image pasted — possible screenshot via Snipping Tool');
          }
        }
      }
    };

    // Attach all event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('paste', handlePaste);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('paste', handlePaste);
    };
  }, []);

  return (
    <div style={{ position: 'relative', userSelect: 'none', WebkitUserSelect: 'none' }}>
      {/* Watermark Overlay */}
      <div
        style={{
          position: 'fixed',
          top: '30%',
          left: '10%',
          fontSize: '5rem',
          color: 'rgba(0, 0, 0, 0.05)',
          transform: 'rotate(-30deg)',
          zIndex: 1000,
          pointerEvents: 'none',
        }}
      >
        Uptoskills
      </div>

      {children}
    </div>
  );
};

export default ScreenShield;
