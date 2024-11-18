"use client";

import Image from "next/image";
import Link from "next/link";
import { Orbitron } from 'next/font/google';
import { useState } from 'react';

const orbitron = Orbitron({ subsets: ['latin'] });

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-mono">
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
              <Link href="#about" className="text-xl md:text-3xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li className="text-center">
              <Link href="#artists" className="text-xl md:text-3xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                ARTISTS
              </Link>
            </li>
            <li className="text-center">
              <Link href="#contact" className="text-xl md:text-3xl hover:underline" onClick={() => setIsMenuOpen(false)}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/images/hero/hero_mono.jpg"
          alt="Textured background"
          fill
          className="object-cover sepia"
          priority
        />
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
          <h2 className="text-3xl font-light">ABOUT</h2>
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
          <h2 className="text-3xl font-light">ARTISTS</h2>
          <div className="space-y-4">
            <Link href="#" className="text-xl underline font-light">
              OPEN CALL CLOSING IN JAN 2025
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <h2 className="text-3xl font-light">CONTACT</h2>
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
