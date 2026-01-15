import { Request } from "../types/request";
import { seedRequests } from "../data/seedRequests";

const STORAGE_KEY = "artisanRequest";

export async function initRequestStorage(): Promise<void> {
  const existing = localStorage.getItem(STORAGE_KEY);

  if (!existing) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedRequests));
  }
}

export async function getRequests(): Promise<Request[]> {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export async function addRequest(request: Request): Promise<Request[]> {
  const stored = await getRequests();
  const updated = [request, ...stored];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}
