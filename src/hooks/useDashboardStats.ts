import { useState, useEffect } from "react";
import { getRequests } from "../services/requestService";
import { getAllArtisans } from "../services/artisanService";

interface Request {
  id: number | string;
  artisanId: number | string;
  name: string;
  request: string;
  details?: string;
  date: string;
}

interface Artisan {
  id: number | string;
  name: string;
  trade: string;
  location: string;
  rating: number;
  availability: string;
  image: string;
  bio?: string;
  portfolio?: { image: string; title: string }[];
}

interface DashboardStats {
  requestsToday: number | null;
  totalArtisans: number | null;
  avgRating: string | null;
}

export function useDashboardStats(): DashboardStats {
  const [stats, setStats] = useState<DashboardStats>({
    requestsToday: null,
    totalArtisans: null,
    avgRating: null,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const requests: Request[] = getRequests();
      const today = new Date().toDateString();

      const requestsToday = requests.filter(
        (r) => new Date(r.date).toDateString() === today
      ).length;

      const artisans: Artisan[] = getAllArtisans();
      const totalArtisans = artisans.length;
      const avgRating =
        (artisans.reduce((acc, a) => acc + (a.rating || 0), 0) / artisans.length || 0
        ).toFixed(1);

      setStats({ requestsToday, totalArtisans, avgRating });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return stats;
}
