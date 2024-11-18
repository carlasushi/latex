"use client";

import Link from "next/link";
import { Orbitron } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-mono">
      <RippleEffect />
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-white/30 backdrop-blur-md z-50 ${orbitron.className}`}>
        <div className="container mx-auto px-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end py-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black p-2"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className={`
            md:flex md:justify-center md:space-x-12 md:py-4
            ${isMenuOpen ? 'block' : 'hidden'}
            space-y-4 md:space-y-0 py-4
          `}>
            <li className="text-center">
              <Link href="#about" className="text-sm md:text-lg hover:underline font-light" onClick={() => setIsMenuOpen(false)}>
                about
              </Link>
            </li>
            <li className="text-center">
              <Link href="#artists" className="text-sm md:text-lg hover:underline font-light" onClick={() => setIsMenuOpen(false)}>
                artists
              </Link>
            </li>
            <li className="text-center">
              <Link href="#contact" className="text-sm md:text-lg hover:underline font-light" onClick={() => setIsMenuOpen(false)}>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          ref={(el) => {
            if (el) el.playbackRate = 0.1;
          }}
        >
          <source src="/video/create_a_glitch_effect_slow_with_ripple_effect_as_if_it_was_for_an_issey_miyake_installation_comput_oi3yb3i84fqz3qnr9pb2_1.mp4" type="video/mp4" />
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

        {/* Artists Section */}
        <section id="artists" className="space-y-8">
          <h2 className="text-xl font-light">ARTISTS</h2>
          <div className="space-y-4">
            <Link href="#" className="text-xl underline font-light">
              OPEN CALL CLOSING IN JAN 2025
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <h2 className="text-xl font-light">CONTACT</h2>
          <div className="space-y-4">
            <Link href="mailto:latexgallery@gmail.com" className="text-lg underline block">
              latexgallery@gmail.com
            </Link>
            <p className="text-lg">@latex.gallery</p>
          </div>
        </section>
      </div>
    </main>
  );
}
