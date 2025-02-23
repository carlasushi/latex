"use client";

import { useRef, useEffect } from 'react';

class Ripple {
  x: number;
  y: number;
  length: number;
  maxLength: number;
  speed: number;
  alpha: number;
  angle: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.length = 0;
    this.maxLength = 100;
    this.speed = 2;
    this.alpha = 0.5;
    this.angle = Math.random() * Math.PI * 2;
  }

  update() {
    if (this.length < this.maxLength) {
      this.length += this.speed;
      this.alpha = 0.5 - (this.length / this.maxLength) * 0.5;
    }
  }
}

export default function RippleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripples = useRef<Ripple[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.current.forEach((ripple, index) => {
        ripple.update();

        ctx.beginPath();
        ctx.moveTo(ripple.x, ripple.y);
        ctx.lineTo(
          ripple.x + Math.cos(ripple.angle) * ripple.length,
          ripple.y + Math.sin(ripple.angle) * ripple.length
        );
        ctx.strokeStyle = `rgba(113, 121, 126, ${ripple.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        if (ripple.alpha <= 0) {
          ripples.current.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      ripples.current.push(new Ripple(event.clientX, event.clientY));
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 10 }}
    />
  );
}
