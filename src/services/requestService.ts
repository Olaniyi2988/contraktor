// // src/services/requestService.ts
// const STORAGE_KEY = "artisanRequest";

// // Define the Request type
// export interface Request {
//   id: number | string;
//   artisanId: number | string;
//   name: string;
//   email: string;
//   request: string; // e.g., artisan.trade
//   details?: string;
//   date: string; // ISO string
// }

// // Get all requests
// export const getRequests = (): Request[] => {
//   const stored = localStorage.getItem(STORAGE_KEY);
//   return stored ? (JSON.parse(stored) as Request[]) : [];
// };

// // Get requests for a specific artisan
// export const getRequestsByArtisan = (artisanId: string | number): Request[] => {
//   return getRequests().filter(r => r.artisanId.toString() === artisanId.toString());
// };

// // Add a new request
// export const addRequest = (request: Request): Request[] => {
//   const stored = getRequests();
//   const updated = [request, ...stored];
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//   return updated;
// };



import { Request } from "../types/request";
import { seedRequests } from "../data/seedRequests";

const STORAGE_KEY = "artisanRequest";

// ✅ Seed on first load
export function initRequestStorage(): void {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedRequests));
  }
}

export function getRequests(): Request[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function addRequest(request: Request): Request[] {
  const stored = getRequests();
  const updated = [request, ...stored];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}
