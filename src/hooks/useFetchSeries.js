import { useState, useEffect } from "react";
import axios from "axios";
import { getSeriesApiUrl } from "../services/api";

const useFetchSeries = (search, sortOrder) => {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const url = getSeriesApiUrl(search);

      try {
        const res = await axios.get(url);

        if (!res.data || !res.data.results) {
          throw new Error("Aucune donnée reçue de l'API.");
        }

        setSeries(res.data.results.slice(0, 16));

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
