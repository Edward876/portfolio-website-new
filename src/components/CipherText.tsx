import React, { useEffect, useState } from 'react';

const japaneseChars = 'ゲンバウェブアプリデザインスキルコードプログラミング';

export function CipherText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [isDecoding, setIsDecoding] = useState(false);

  useEffect(() => {
    if (!isDecoding) {
      const timeout = setTimeout(() => {
        setIsDecoding(true);
        let iteration = 0;
        
        const interval = setInterval(() => {
          setDisplayText(prev => {
            const result = text
              .split('')
              .map((char, index) => {
                if (index < iteration) {
                  return text[index];
                }
                return japaneseChars[Math.floor(Math.random() * japaneseChars.length)];
              })
              .join('');
            
            if (iteration >= text.length) {
              clearInterval(interval);
            }
            
            iteration += 1/3;
            return result;
          });
        }, 30);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [text, delay, isDecoding]);

  return <span className="font-mono">{displayText || text}</span>;
}