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
    <div className="relative w-full max-w-[100px] mx-auto my-2">
      {/* Vinyl Record Animation */}
      <div className={`relative w-14 h-14 mx-auto mb-1 ${isPlaying ? 'animate-spin' : ''}`} 
           style={{ animationDuration: '4s', transformOrigin: 'center' }}>
        <div className="absolute inset-0 rounded-full bg-black shadow-lg">
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-700 to-gray-800">
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-gray-600 to-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Play/Pause Button */}
      <Button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-6 h-6 p-0 bg-accent hover:bg-accent/90"
      >
        {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
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