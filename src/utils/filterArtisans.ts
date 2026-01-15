// src/utils/filterArtisans.ts
import type { Artisan } from "../types";

export function filterArtisans(artisans: Artisan[], search: string): Artisan[] {
  if (!search) return artisans;

  const lower = search.toLowerCase();

  return artisans.filter((a) => {
    return (
      a.name.toLowerCase().includes(lower) ||
      a.trade.toLowerCase().includes(lower) ||
      a.location.toLowerCase().includes(lower) ||
      a.availability.toLowerCase().includes(lower) ||
      a.rating.toString().includes(lower)
    );
  });
}
