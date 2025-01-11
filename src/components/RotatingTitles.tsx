import React, { useEffect, useState } from 'react';
import { CipherText } from './CipherText';

export function RotatingTitles() {
  const titles = [
    "Machine Learning Enthusiast",
    "Python Developer",
    "Node.js Developer",
    "Full Stack Developer"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // Force re-render of CipherText

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
      setKey(prev => prev + 1);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block h-8"> {/* Changed from div to span */}
      <CipherText key={key} text={titles[currentIndex]} delay={0} />
    </span>
  );
}