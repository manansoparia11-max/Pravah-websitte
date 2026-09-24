import React, { useEffect, useRef } from 'react';

/**
 * RiverFlowCanvas (Light Mode)
 * Renders ethereal, calm flowing purple ribbons and particles on a crisp white/cream background.
 * Creates an airy, high-end editorial atmosphere with 60fps performance.
 */
export default function RiverFlowCanvas({ className = "w-full h-full" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = 28;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.3 + Math.random() * 0.7,
      size: 1.5 + Math.random() * 2,
      opacity: 0.12 + Math.random() * 0.25,
      hue: '#9333EA',
      offset: Math.random() * Math.PI * 2,
    }));

    let step = 0;
    let mouse = { x: width * 0.5, y: height * 0.5, targetX: width * 0.5, targetY: height * 0.5 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const ribbons = [
      { yOffset: 0.35, amp: 40, freq: 0.0025, speed: 0.012, color: 'rgba(147, 51, 234, 0.06)', width: 2.5 },
      { yOffset: 0.52, amp: 55, freq: 0.002, speed: 0.010, color: 'rgba(124, 58, 237, 0.08)', width: 3.5 },
      { yOffset: 0.68, amp: 45, freq: 0.003, speed: 0.014, color: 'rgba(192, 132, 252, 0.07)', width: 2 }
    ];

    const render = () => {
      step += 1;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      ribbons.forEach((r, idx) => {
        ctx.beginPath();
        const baseCenterY = height * r.yOffset;
        const mouseInfluence = (mouse.y - height * 0.5) * 0.06 * (idx % 2 === 0 ? 1 : -1);

        for (let x = 0; x <= width; x += 15) {
          const wave = Math.sin(x * r.freq + step * r.speed) * r.amp;
          const y = baseCenterY + wave + mouseInfluence;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = r.color;
        ctx.lineWidth = r.width;
        ctx.lineCap = 'round';
        ctx.stroke();
      });

      particles.forEach((p) => {
        p.x += p.speed;
        p.offset += 0.02;
        const wave = Math.sin(p.x * 0.003 + p.offset) * 15;

        if (p.x > width + 20) {
          p.x = -20;
          p.y = Math.random() * height;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y + wave, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.hue;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`pointer-events-none absolute inset-0 ${className}`} 
      aria-hidden="true"
    />
  );
}
