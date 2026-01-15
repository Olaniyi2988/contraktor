import { useState, useEffect, useCallback, useMemo } from "react";
import { debounce } from "../utils/debounce";
import { fetchArtisans } from "../services/exploreService";
import type { Artisan } from "../types";

const ITEMS_PER_PAGE = 6;

export function useExploreArtisans() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Artisan[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const runSearch = useCallback(
    debounce(async (value: string) => {
      setLoading(true);
      const result = await fetchArtisans(value);
      setData(result);
      setCurrentPage(1);
      setLoading(false);
    }, 300),
    []
  );

  useEffect(() => {
    runSearch(search);
  }, [search, runSearch]);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginatedData = useMemo(
    () =>
      data.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      ),
    [data, currentPage]
  );

  return {
    search,
    setSearch,
    loading,
    paginatedData,
    currentPage,
    setCurrentPage,
    totalPages,
    totalCount: data.length,
  };
}
