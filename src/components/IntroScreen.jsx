import { useState, useEffect } from 'react';

export function IntroScreen({ onIntroComplete }) {
    const [showName, setShowName] = useState(false);
    const [showOccupation, setShowOccupation] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [currentName, setCurrentName] = useState('');
  
    useEffect(() => {
      const fullName = 'Adeoluwa';
      let currentIndex = 0;
  
      const nameTimer = setInterval(() => {
        if (currentIndex <= fullName.length) {
          setCurrentName(fullName.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(nameTimer);
          setShowName(true);
          setTimeout(() => setShowOccupation(true), 500);
          setTimeout(() => setFadeOut(true), 2500);
          setTimeout(onIntroComplete, 3500);
        }
      }, 200);
  
      return () => {
        clearInterval(nameTimer);
      };
    }, [onIntroComplete]);
  
    return (
      <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-center">
          <h1 className={`text-4xl lg:text-9xl main md:text-6xl font-bold text-white mb-4 transition-all duration-300 ${showName ? 'translate-y-0' : 'translate-y-full'}`}>
            {currentName}
          </h1>
          <p className={`text-xl buttonp md:text-4xl text-purple-400 transition-transform duration-1000 ${showOccupation ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            Software Engineer<br />Web and Mobile App Developer
          </p>
        </div>
      </div>
    );
  }
  