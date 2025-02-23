'use client';

import { useState, useEffect } from 'react';

interface FloatingTitleProps {
  pageName?: string;  // Optional page name
}

export default function FloatingTitle({ pageName }: FloatingTitleProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 200);  // Show until 200px of scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-4 top-4 z-[60] transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <h2 className="text-xl font-light">
        LATEX{pageName ? ` / ${pageName}` : ''}
      </h2>
    </div>
  );
}
