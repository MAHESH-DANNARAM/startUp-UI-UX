import { useEffect, useState } from 'react';
import "@/assets/frontend/css/style1.css"


const Animation = () => {
  const letters = ['F', 'A', 'T', 'S'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex < letters.length - 1) {
        setActiveIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        setShowFullName(true);
      }
    }, 1000); // Change letter every 1 second

    return () => clearInterval(interval);
  }, [activeIndex]);

  const renderAnimatedText = () => {
    switch (letters[activeIndex]) {
      case 'F':
        return 'FUTURE';
      case 'A':
        return 'AI';
      case 'T':
      case 'S':
        return 'TECHNOLOGY\'S';
      default:
        return '';
    }
  };

  return (
    <div className="containers1">
      <div className="letters">
        {letters.map((letter, index) => (
          <span 
            key={index}
            className={`letter ${activeIndex === index ? 'active' : ''}title pt-[5%]`}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="text-below">
        {showFullName ? 'FUTURE AI TECHNOLOGY\'S' : renderAnimatedText()}
      </div>
    </div>
  );
};

export default Animation;
