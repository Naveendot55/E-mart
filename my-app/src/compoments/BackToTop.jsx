import React, { useState, useEffect } from 'react';

/**
 * BackToTop - Floating scroll-to-top button
 * Appears when user scrolls down 300px, smoothly scrolls to top on click
 * Positioned fixed at bottom-right with fade-in/out animation
 */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      id="back-to-top-btn"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

export default BackToTop;
