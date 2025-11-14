"use client";

import React, { useState } from 'react';

interface YouTubeLazyEmbedProps {
  videoId: string;
  title: string;
  isVisible?: boolean;
}

const YouTubeLazyEmbed = ({ videoId, title, isVisible = false }: YouTubeLazyEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlayClick = () => {
    setIsLoaded(true);
  };

  // Use hqdefault which is more reliable and available for most videos
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="aspect-video bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden relative">
      {!isLoaded ? (
        <>
          <img
            src={thumbnailUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
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
        />
      )}
    </div>
  );
};

export default YouTubeLazyEmbed;
