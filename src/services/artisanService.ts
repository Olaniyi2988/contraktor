import artisansData from "../data/artisans.json";

export interface Artisan {
  id: string; 
  name: string;
  trade: string;
  location: string;
  rating: number;
  availability: string;
  bio?: string;
  image: string;
  portfolio?: { title: string; image: string }[];
}

export const getAllArtisans = (): Artisan[] => {
  return artisansData as Artisan[];
};

export const getArtisanById = (id: string | number): Artisan | undefined => {
  return (artisansData as Artisan[]).find(a => a.id.toString() === id.toString());
};
