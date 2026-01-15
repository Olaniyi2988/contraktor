// src/hooks/useRequestsChartData.ts
import { useState, useEffect } from "react";
import { getRequests } from "../services/requestService";

// Define the Request type (should match your local storage / service)
interface Request {
  id: number | string;
  artisanId: number | string;
  name: string;
  request: string;
  details?: string;
  date: string;
}

// Type for chart data
interface ChartData {
  day: string;
  requests: number;
}

export function useRequestsChartData(): ChartData[] {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    const requests: Request[] = getRequests();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const counts: Record<string, number> = { Sun:0, Mon:0, Tue:0, Wed:0, Thu:0, Fri:0, Sat:0 };

    requests.forEach((r) => {
      const day = days[new Date(r.date).getDay()];
      counts[day] += 1;
    });

    const chartData: ChartData[] = days.map((day) => ({ day, requests: counts[day] }));
    setData(chartData);
  }, []);

  return data;
}
