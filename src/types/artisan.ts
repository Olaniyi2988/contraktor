export interface PortfolioItem {
  title: string;
  image: string;
}

export interface Artisan {
  id: number | string;
  name: string;
  trade: string;
  location: string;
  rating: number;
  availability: string;
  bio: string;
  image: string;
  portfolio: PortfolioItem[];
}
