import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSeries = (search, sortOrder) => {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const API_KEY = process.env.REACT_APP_API_KEY;
      const BASE_URL = "https://api.themoviedb.org/3";
      const endpoint = search
        ? `/search/tv?query=${encodeURIComponent(search)}&language=fr-FR`
        : `/trending/tv/day?language=fr-FR`;

      const url = `${BASE_URL}${endpoint}&api_key=${API_KEY}`;

      try {
        const res = await axios.get(url);

        if (!res.data || !res.data.results) {
          throw new Error("Aucune donnée reçue de l'API.");
        }

        let fetchedSeries = res.data.results.slice(0, 16);

        if (sortOrder !== "none") {
          fetchedSeries = [...fetchedSeries].sort((a, b) =>
            sortOrder === "top"
              ? b.vote_average - a.vote_average
              : a.vote_average - b.vote_average
          );
        }

        setSeries(fetchedSeries);

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search, sortOrder]);

  return { series, error, loading };
};

export default useFetchSeries;
