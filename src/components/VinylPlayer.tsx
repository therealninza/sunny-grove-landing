import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play, SkipForward, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import vinylRecord from '@/assets/vinyl-record.jpg';

interface Track {
  title: string;
  duration: number;
  id: number;
}

export const VinylPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    // Initialize SoundCloud Widget API
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    
    script.onload = () => {
      if (iframeRef.current && (window as any).SC) {
        const widget = (window as any).SC.Widget(iframeRef.current);
        widgetRef.current = widget;
        
        // Wait for widget to be ready
        widget.bind((window as any).SC.Widget.Events.READY, () => {
          // Get all tracks from playlist
          widget.getSounds((sounds: Track[]) => {
            console.log('Loaded tracks:', sounds);
            setTracks(sounds);
          });
          
          // Get current track
          widget.getCurrentSound((sound: Track) => {
            setCurrentTrack(sound);
          });
        });
        
        // Listen for track changes
        widget.bind((window as any).SC.Widget.Events.PLAY, () => {
          setIsPlaying(true);
          widget.getCurrentSound((sound: Track) => {
            setCurrentTrack(sound);
          });
        });
        
        widget.bind((window as any).SC.Widget.Events.PAUSE, () => {
          setIsPlaying(false);
        });
        
        widget.bind((window as any).SC.Widget.Events.FINISH, () => {
          setIsPlaying(false);
        });
      }
    };
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const togglePlay = () => {
    if (widgetRef.current) {
      if (isPlaying) {
        widgetRef.current.pause();
      } else {
        widgetRef.current.play();
      }
    }
  };

  const skipToNext = () => {
    if (widgetRef.current) {
      widgetRef.current.next();
    }
  };

  const playTrack = (index: number) => {
    if (widgetRef.current) {
      widgetRef.current.skip(index);
      widgetRef.current.play();
    }
  };

  const formatDuration = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-full max-w-[120px] mx-auto my-2 flex flex-col items-center">
      {/* Vinyl Record Animation */}
      <div className="relative w-24 h-24 mb-4">
        <img
          src={vinylRecord}
          alt="Vinyl Record"
          className={`w-full h-full rounded-full object-cover shadow-lg ${isPlaying ? 'animate-spin' : ''}`}
          style={{ animationDuration: '4s', transformOrigin: 'center' }}
        />
        
        {/* Play/Pause Button */}
        <Button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-7 h-7 p-0 bg-accent hover:bg-accent/90 shadow-lg"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2">
        <Button
          onClick={skipToNext}
          size="icon"
          variant="ghost"
          className="h-8 w-8 rounded-full text-accent hover:text-accent hover:bg-accent/10"
        >
          <SkipForward className="h-4 w-4" />
        </Button>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full text-accent hover:text-accent hover:bg-accent/10"
            >
              <List className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Playlist</h4>
              {currentTrack && (
                <p className="text-xs text-muted-foreground">
                  Now playing: {currentTrack.title}
                </p>
              )}
              <ScrollArea className="h-[200px]">
                <div className="space-y-1">
                  {tracks.map((track, index) => (
                    <button
                      key={track.id}
                      onClick={() => playTrack(index)}
                      className={`w-full text-left p-2 rounded text-xs hover:bg-accent transition-colors ${
                        currentTrack?.id === track.id ? 'bg-accent' : ''
                      }`}
                    >
                      <div className="font-medium truncate">{track.title}</div>
                      <div className="text-muted-foreground">{formatDuration(track.duration)}</div>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </PopoverContent>
        </Popover>
      </div>

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