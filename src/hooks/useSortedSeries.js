import { useMemo } from "react";

const useSortedSeries = (series, sortOrder) => {
  return useMemo(() => {
    if (!series || series.length === 0) return [];

    if (sortOrder === "top") {
      return [...series].sort((a, b) => b.vote_average - a.vote_average);
    } else if (sortOrder === "flop") {
      return [...series].sort((a, b) => a.vote_average - b.vote_average);
    }

    return series;
  }, [series, sortOrder]);
};

export default useSortedSeries;