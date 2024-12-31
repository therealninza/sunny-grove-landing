import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const VinylPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Initialize SoundCloud Widget API
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const iframe = iframeRef.current;
    if (iframe) {
      const widget = (window as any).SC.Widget(iframe);
      if (isPlaying) {
        widget.pause();
      } else {
        widget.play();
      }
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto my-8 bg-black/30 backdrop-blur-sm rounded-full">
      {/* Vinyl Record Animation */}
      <div className={`relative w-64 h-64 mx-auto mb-4 ${isPlaying ? 'animate-spin' : ''}`} 
           style={{ animationDuration: '4s', transformOrigin: 'center' }}>
        <div className="absolute inset-0 rounded-full bg-black/50 shadow-lg">
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800/50 to-gray-900/50">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-700/50 to-gray-800/50">
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-gray-600/50 to-gray-700/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Play/Pause Button */}
      <Button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-accent/70 hover:bg-accent/90"
      >
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </Button>

      {/* Hidden SoundCloud iframe */}
      <iframe
        ref={iframeRef}
        width="100%"
        height="0"
        scrolling="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https://soundcloud.com/djwifhat/sets/greenhouse&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
      />
    </div>
  );
};