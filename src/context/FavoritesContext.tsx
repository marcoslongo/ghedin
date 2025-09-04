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
    const exists = favorites.some((f) => f.id === fav.id);

    if (exists) {
      setFavorites((prev) => prev.filter((f) => f.id !== fav.id));
      toast.error("Removido dos favoritos", {
        description: `"${fav.title}" foi removido da sua lista.`,
      });
    } else {
      setFavorites((prev) => [...prev, fav]);
      toast.success("Adicionado aos favoritos", {
        description: `"${fav.title}" foi adicionado à sua lista.`,
      });
    }
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