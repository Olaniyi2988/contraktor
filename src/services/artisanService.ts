// src/services/artisanService.ts
import artisansData from "../data/artisans.json";

// Define Artisan type
export interface Artisan {
  id: string; // match your JSON id type
  name: string;
  trade: string;
  location: string;
  rating: number;
  availability: string;
  bio?: string;
  image: string;
  portfolio?: { title: string; image: string }[];
}

// Get all artisans
export const getAllArtisans = (): Artisan[] => {
  return artisansData as Artisan[];
};

// Get artisan by ID
export const getArtisanById = (id: string | number): Artisan | undefined => {
  return (artisansData as Artisan[]).find(a => a.id.toString() === id.toString());
};
