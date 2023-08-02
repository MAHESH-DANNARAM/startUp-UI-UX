
import '@/components/frontend/assets/css/style.css'


import React, { useEffect } from 'react';

const AnimatedWord = () => {
  useEffect(() => {
    const letterContainers = document.querySelectorAll('.letter-container');
    letterContainers.forEach((container, index) => {
      const animation = container.querySelector('.animation') as HTMLElement;
      if (animation) {
        animation.style.transitionDelay = `${index * 0.2}s`;
        container.classList.add('animate');
      }
    });
  }, []);

  return (
    <div className="word-container">
      <div className="letter-container">
        <span className="letter">F</span>
        <div className="animation">future</div>
      </div>
      <div className="letter-container">
        <span className="letter">A</span>
        <div className="animation">ai</div>
      </div>
      <div className="letter-container">
        <span className="letter">T</span>
        <div className="animation">technology's</div>
      </div>
      <div className="letter-container">
        <span className="letter">S</span>
      </div>
    </div>
  );
};

export default AnimatedWord;


