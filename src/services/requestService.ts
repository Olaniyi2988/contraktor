import { Request } from "../types/request";
import { seedRequests } from "../data/seedRequests";

const STORAGE_KEY = "artisanRequest";

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
