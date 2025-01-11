import React, { useEffect, useRef } from 'react';

export function NeonCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points: { x: number; y: number; age: number }[] = [];
  const MAX_POINTS = 25;
  const MAX_AGE = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (points.length > MAX_POINTS) points.shift();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        point.age++;
        if (point.age > MAX_AGE) {
          points.splice(i, 1);
          i--;
          continue;
        }

        const opacity = 1 - point.age / MAX_AGE;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
        ctx.fill();

        if (i > 0) {
          const prevPoint = points[i - 1];
          ctx.beginPath();
          ctx.moveTo(prevPoint.x, prevPoint.y);
          ctx.lineTo(point.x, point.y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.5})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}