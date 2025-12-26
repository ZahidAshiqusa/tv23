import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { X, Volume2, VolumeX, Maximize, Minimize, Play, Pause, SkipBack, SkipForward, Settings, Radio } from 'lucide-react';
import { Channel } from '@/data/channels';
import splashImage from '@/assets/wassi-tv-player-splash.png';

interface VideoPlayerProps {
  channel: Channel;
  onClose: () => void;
}

const VideoPlayer = ({ channel, onClose }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(channel.streamUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
        setIsLoading(false);
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          setError('Stream unavailable. Please try another channel.');
          setIsLoading(false);
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = channel.streamUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play();
        setIsLoading(false);
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [channel.streamUrl]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (!isPaused) {
        setShowControls(false);
      }
    }, 3000);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-background animate-fade-in">
      <div 
        ref={containerRef}
        className="relative w-full h-full flex flex-col"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => !isPaused && setShowControls(false)}
      >
        {/* Top Bar */}
        <div className={`absolute top-0 left-0 right-0 z-20 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-b from-background via-background/80 to-transparent p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={channel.logoUrl} 
                  alt={channel.name}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl bg-secondary/50 backdrop-blur-sm p-2 border border-border/50"
                />
                <div>
                  <h2 className="text-lg md:text-2xl font-bold text-foreground">{channel.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Radio className="w-3 h-3 text-primary animate-pulse" />
                    <span className="text-xs md:text-sm text-primary font-medium">LIVE NOW</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground transition-all duration-300 border border-border/50"
                aria-label="Close player"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Container */}
        <div className="flex-1 flex items-center justify-center bg-black relative overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/50 pointer-events-none z-30" />
          <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/50 pointer-events-none z-30" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/50 pointer-events-none z-30" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/50 pointer-events-none z-30" />
          
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-background">
              {/* Background gradient effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              
              <img 
                src={splashImage} 
                alt="Loading Wassi TV" 
                className="relative w-48 h-48 md:w-64 md:h-64 object-contain mb-6 drop-shadow-2xl animate-pulse"
              />
              
              {/* Rainbow spinner */}
              <div className="relative w-14 h-14 mb-4">
                <svg className="w-full h-full animate-spin" style={{ animationDuration: '1.5s' }} viewBox="0 0 50 50">
                  <defs>
                    <linearGradient id="rainbow-player" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B6B" />
                      <stop offset="16%" stopColor="#FFB347" />
                      <stop offset="33%" stopColor="#FFFF6B" />
                      <stop offset="50%" stopColor="#6BFF6B" />
                      <stop offset="66%" stopColor="#6BFFFF" />
                      <stop offset="83%" stopColor="#6B6BFF" />
                      <stop offset="100%" stopColor="#FF6BFF" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="url(#rainbow-player)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="80 40"
                  />
                </svg>
              </div>
              
              <p className="text-foreground text-lg font-semibold animate-pulse">Loading Stream...</p>
              <p className="text-muted-foreground text-sm mt-2">{channel.name}</p>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-background/95">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-10 h-10 text-destructive" />
                </div>
                <p className="text-xl text-destructive mb-2 font-semibold">{error}</p>
                <p className="text-muted-foreground mb-6">Please select another channel to continue watching</p>
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all font-medium"
                >
                  Browse Channels
                </button>
              </div>
            </div>
          )}

          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            playsInline
            autoPlay
            onClick={togglePlayPause}
          />
        </div>

        {/* Bottom Controls */}
        <div className={`absolute bottom-0 left-0 right-0 z-20 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-t from-background via-background/80 to-transparent p-4 md:p-6">
            {/* Progress bar aesthetic */}
            <div className="w-full h-1 bg-secondary/50 rounded-full mb-4 overflow-hidden">
              <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '100%' }} />
            </div>
            
            <div className="flex items-center justify-between gap-4">
              {/* Left Controls */}
              <div className="flex items-center gap-2 md:gap-4">
                <button
                  onClick={togglePlayPause}
                  className="p-3 md:p-4 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/30"
                  aria-label={isPaused ? "Play" : "Pause"}
                >
                  {isPaused ? (
                    <Play className="w-5 h-5 md:w-6 md:h-6 ml-0.5" />
                  ) : (
                    <Pause className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                </button>
                
                <button
                  className="p-2 md:p-3 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-muted transition-all border border-border/50 hidden sm:flex"
                  aria-label="Previous"
                >
                  <SkipBack className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                
                <button
                  className="p-2 md:p-3 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-muted transition-all border border-border/50 hidden sm:flex"
                  aria-label="Next"
                >
                  <SkipForward className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2 group">
                  <button
                    onClick={toggleMute}
                    className="p-2 md:p-3 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-muted transition-all border border-border/50"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      <Volume2 className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-0 group-hover:w-20 md:group-hover:w-24 transition-all duration-300 h-1 bg-secondary rounded-full appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-2 md:gap-3">
                <button
                  className="p-2 md:p-3 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-muted transition-all border border-border/50 hidden sm:flex"
                  aria-label="Settings"
                >
                  <Settings className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                
                <button
                  onClick={toggleFullscreen}
                  className="p-2 md:p-3 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-muted transition-all border border-border/50"
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? (
                    <Minimize className="w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <Maximize className="w-4 h-4 md:w-5 md:h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
