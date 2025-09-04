import { Heart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { useFavorites } from "../context/FavoritesContext";

interface FavoritoButtonProps {
  imovel: {
    id: string;
    title: string;
    slug: string;
    featuredImage?: {
      node?: {
        sourceUrl?: string | null;
      } | null;
    } | null;
  };
}

export function FavoritoButton({ imovel }: FavoritoButtonProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isCurrentFavorite = isFavorite(imovel.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    toggleFavorite({
      id: imovel.id,
      title: imovel.title,
      slug: imovel.slug,
      image: imovel.featuredImage?.node?.sourceUrl || undefined,
    });
  };

  return (
      <Button
        onClick={handleToggleFavorite}
        className={`flex absolute z-10 rounded-full w-10 h-10 border border-transparent cursor-pointer right-3 top-3 transition-all duration-200 ${isCurrentFavorite
          ? "bg-[#9a8167] text-white hover:bg-[#9a8167]"
          : "bg-white text-[#483b35] hover:bg-[#9a8167] hover:border-[#9a8167] hover:text-white"
          }`}
      >
        <Heart
          className={`w-5 h-5 transition-all duration-200 ${isCurrentFavorite ? "fill-current" : ""
            }`}
        />
      </Button>
  );
}