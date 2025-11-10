"use client";

import React, { useState, useEffect, useRef, memo } from 'react';
import Image from 'next/image';

interface YouTubeLazyEmbedProps {
  videoId: string;
  title: string;
  isVisible?: boolean;
}

const YouTubeLazyEmbed = memo(({ videoId, title, isVisible = false }: YouTubeLazyEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only set up intersection observer if the video is potentially visible in carousel
    if (!isVisible) {
      setShouldLoad(false);
      setIsLoaded(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isVisible]);

  const handlePlayClick = () => {
    setIsLoaded(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      ref={containerRef}
      className="aspect-video bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden relative"
    >
      {!isLoaded ? (
        <>
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75}
            loading="lazy"
          />
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors z-10"
            aria-label={`Play ${title}`}
          >
            <div className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
          loading="lazy"
        />
      )}
    </div>
  );
});

YouTubeLazyEmbed.displayName = 'YouTubeLazyEmbed';

export default YouTubeLazyEmbed;
