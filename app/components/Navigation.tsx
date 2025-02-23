"use client";

import Link from "next/link";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-md z-50">
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
            <Link
              href="/"
              className={`text-sm md:text-lg hover:underline font-light ${pathname === '/' ? 'text-blue-600' : ''}`}
            >
              home
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/#about"
              className="text-sm md:text-lg hover:underline font-light"
            >
              about
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/#contact"
              className="text-sm md:text-lg hover:underline font-light"
            >
              contact
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/lab"
              className={`text-sm md:text-lg hover:underline font-light ${pathname.startsWith('/lab') ? 'text-blue-600' : ''}`}
            >
              lab
            </Link>
          </li>
          <li className="text-center">
            <Link
              href="/artists"
              className={`text-sm md:text-lg hover:underline font-light ${pathname === '/artists' ? 'text-blue-600' : ''}`}
            >
              artists
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
