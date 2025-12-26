import { Heart } from 'lucide-react';
import { Channel } from '@/data/channels';

interface ChannelCardProps {
  channel: Channel;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelect: (channel: Channel) => void;
  index: number;
}

const ChannelCard = ({ channel, isFavorite, onToggleFavorite, onSelect, index }: ChannelCardProps) => {
  return (
    <div 
      className="channel-card group animate-slide-up"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <button
        onClick={() => onSelect(channel)}
        className="w-full p-4 flex flex-col items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl"
      >
        <div className="relative w-full aspect-video flex items-center justify-center bg-secondary rounded-lg overflow-hidden">
          <img
            src={channel.logoUrl}
            alt={channel.name}
            className="w-3/4 h-3/4 object-contain transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <span className="live-badge">Live</span>
        </div>
        <span className="text-sm font-medium text-foreground text-center line-clamp-2 group-hover:text-primary transition-colors">
          {channel.name}
        </span>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(channel.id);
        }}
        className={`absolute top-2 left-2 p-2 rounded-full transition-all duration-200 ${
          isFavorite 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-secondary/80 text-muted-foreground hover:text-primary'
        }`}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
      </button>
    </div>
  );
};

export default ChannelCard;
