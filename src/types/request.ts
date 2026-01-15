export interface Request {
  id: string | number;
  artisanId: number | string;
  name: string;
  email?: string;
  request: string;
  details?: string;
  date: string;
}
