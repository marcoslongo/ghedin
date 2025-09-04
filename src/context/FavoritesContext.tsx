"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";
import Link from "next/link";

interface FavoriteItem {
  id: string;
  title: string;
  slug: string;
  image?: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const toggleFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === item.id);

      if (exists) {
        toast.error(`Removido de favoritos: ${item.title}`);
        return prev.filter((fav) => fav.id !== item.id);
      } else {
        toast.success(
          <span>
            Adicionado aos favoritos: <strong>{item.title}</strong>.{" "}
            <Link href="/favoritos" className="underline font-medium">
              Ver favoritos
            </Link>
          </span>
        );
        return [...prev, item];
      }
    });
  };

  const isFavorite = (id: string) => favorites.some((fav) => fav.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
