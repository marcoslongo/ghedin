"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

type Favorite = {
  id: string;
  title: string;
  slug: string;
  image?: string;
};

type FavoritesContextType = {
  favorites: Favorite[];
  toggleFavorite: (fav: Favorite) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (fav: Favorite) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === fav.id);
      if (exists) {
        toast.error("Removido dos favoritos", {
          description: `"${fav.title}" foi removido da sua lista.`,
        });
        return prev.filter((f) => f.id !== fav.id);
      } else {
        toast.success("Adicionado aos favoritos", {
          description: `"${fav.title}" foi adicionado à sua lista.`,
        });
        return [...prev, fav];
      }
    });
  };

  const isFavorite = (id: string) => favorites.some((f) => f.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return context;
}
