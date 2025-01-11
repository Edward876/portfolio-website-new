import React, { useEffect, useState, useRef } from 'react';
import { CipherText } from './CipherText';

export function Section({ 
  title, 
  children,
  delay = 0
}: { 
  title: string; 
  children: React.ReactNode;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setKey(prev => prev + 1); // Force cipher effect to restart
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the section comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="mb-12 opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(1rem)'
    }}>
      <h2 className="text-2xl font-bold mb-4 text-purple-300 group">
        <span className="inline-block">
          {isVisible && <CipherText key={key} text={title} delay={0} />}
        </span>
        <div className="h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-purple-500" />
      </h2>
      <div className="text-purple-100">{children}</div>
    </div>
  );
}