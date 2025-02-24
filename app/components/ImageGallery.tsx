'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: number[];
  basePath: string;
  extension: string;
}

export default function ImageGallery({ images, basePath, extension }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [corners, setCorners] = useState({ top: 0, left: 0, width: 0, height: 0 });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!selectedImage) return;

    switch (e.key) {
      case 'ArrowRight':
        setSelectedImage(selectedImage < images.length ? selectedImage + 1 : 1);
        break;
      case 'ArrowLeft':
        setSelectedImage(selectedImage > 1 ? selectedImage - 1 : images.length);
        break;
      case 'Escape':
        setSelectedImage(null);
        break;
    }
  }, [selectedImage, images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart || !selectedImage) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setSelectedImage(selectedImage < images.length ? selectedImage + 1 : 1);
      } else {
        setSelectedImage(selectedImage > 1 ? selectedImage - 1 : images.length);
      }
    }
    setTouchStart(null);
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage, handleKeyDown]);

  useEffect(() => {
    if (selectedImage && imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setCorners({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      });
    }
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        {images.map((num) => (
          <div
            key={num}
            className="relative w-full h-[600px] group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(num)}
          >
            <Image
              src={`${basePath}_${num}.${extension}`}
              alt={`Port+all Gallery Image ${num}`}
              fill
              sizes="100vw"
              className="w-full h-full object-contain bg-white"
              priority={num <= 2}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Modal with corner lines */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center overflow-hidden"
          onClick={() => setSelectedImage(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Corner Lines */}
          <svg className="fixed inset-0 w-full h-full pointer-events-none">
            <line
              x1="0"
              y1="0"
              x2={corners.left}
              y2={corners.top}
              className="stroke-white/50 animate-draw"
            />
            <line
              x1="100%"
              y1="0"
              x2={corners.left + corners.width}
              y2={corners.top}
              className="stroke-white/50 animate-draw"
            />
            <line
              x1="0"
              y1="100%"
              x2={corners.left}
              y2={corners.top + corners.height}
              className="stroke-white/50 animate-draw"
            />
            <line
              x1="100%"
              y1="100%"
              x2={corners.left + corners.width}
              y2={corners.top + corners.height}
              className="stroke-white/50 animate-draw"
            />
          </svg>

          <div
            ref={imageRef}
            className="relative w-full h-full md:w-3/4 lg:w-2/3 max-w-5xl max-h-[80vh] m-4 animate-scaleUp"
          >
            <Image
              src={`${basePath}_${selectedImage}.${extension}`}
              alt={`Port+all Gallery Image ${selectedImage}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            {/* Navigation controls */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
              <button
                className="text-white px-4 py-2 rounded hover:bg-white hover:bg-opacity-20"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage > 1 ? selectedImage - 1 : images.length);
                }}
              >
                ←
              </button>
              <span className="text-white px-4 py-2">
                {selectedImage} / {images.length}
              </span>
              <button
                className="text-white px-4 py-2 rounded hover:bg-white hover:bg-opacity-20"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage < images.length ? selectedImage + 1 : 1);
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
