import { 
  Tv, 
  Newspaper, 
  Film, 
  Trophy, 
  Clapperboard, 
  Baby, 
  Moon, 
  Globe,
  Heart
} from 'lucide-react';
import { categories } from '@/data/channels';

const iconMap = {
  Tv,
  Newspaper,
  Film,
  Trophy,
  Clapperboard,
  Baby,
  Moon,
  Globe,
};

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  showFavorites: boolean;
  onToggleFavorites: () => void;
  favoritesCount: number;
}

const CategoryFilter = ({ 
  selectedCategory, 
  onSelectCategory, 
  showFavorites,
  onToggleFavorites,
  favoritesCount
}: CategoryFilterProps) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-4">
      <div className="flex gap-2 md:gap-3 min-w-max px-4 md:px-0">
        {/* Favorites Button */}
        <button
          onClick={onToggleFavorites}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
            showFavorites
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
              : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          <Heart className={`w-4 h-4 ${showFavorites ? 'fill-current' : ''}`} />
          <span>Favorites</span>
          {favoritesCount > 0 && (
            <span className={`px-1.5 py-0.5 text-xs rounded-full ${
              showFavorites ? 'bg-primary-foreground/20' : 'bg-muted'
            }`}>
              {favoritesCount}
            </span>
          )}
        </button>

        <div className="w-px h-8 bg-border self-center" />

        {/* Category Buttons */}
        {categories.map((category) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap];
          const isActive = selectedCategory === category.id && !showFavorites;
          
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
