"use client";

import Link from "next/link";
import { Orbitron } from 'next/font/google';
import { useRef, useEffect } from 'react';
import Navigation from './components/Navigation';

const orbitron = Orbitron({ subsets: ['latin'] });

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

function RippleEffect() {
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

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <RippleEffect />
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/video/create_a_glitch_effect_slow_with_ripple_effect_as_if_it_was_for_an_issey_miyake_installation_comput_8xekxn2gixvcg39mcqc3_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-light ${orbitron.className}`}>
            LATEX
          </h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* About Section */}
        <section id="about" className="space-y-8">
          <h2 className="text-xl font-light">ABOUT</h2>
          <div className="space-y-6 max-w-3xl text-lg leading-relaxed font-light">
            <p>
              LATEX is a Web3 pop-up gallery where art meets community. Our focus on in-person
              gatherings allows attendees to connect directly with artists, curators, and fellow
              art enthusiasts.
            </p>
            <p>
              Our mission is to bridge the digital and physical art worlds by utilizing Web3
              technology to enhance the artistic experience while celebrating the evolution of art
              through the integration of traditional forms with modern practices, enabling visitors to
              explore and purchase both digital and real-world art.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <h2 className="text-xl font-light">CONTACT</h2>
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="text-lg">Email</p>
            </div>
            <Link href="mailto:info@www.latexgallery.art" className="text-lg underline block">
              <p>info@www.latexgallery.art</p>
            </Link>
            <div className="space-y-4">
              <p className="text-lg">Socials</p>
            </div>
            <Link href="https://www.instagram.com/latex.gallery/profilecard/" className="text-lg underline block">
            <p className="text-lg">@latex.gallery</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
