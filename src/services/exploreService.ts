import artisansData from "../data/artisans.json";
import { filterArtisans } from "../utils/filterArtisans";
import type { Artisan } from "../types";

export async function fetchArtisans(
  search: string
): Promise<Artisan[]> {
  await new Promise((res) => setTimeout(res, 300));

  if (!search.trim()) {
    return artisansData as Artisan[];
  }

  return filterArtisans(artisansData as Artisan[], search);
}
