import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Search from "./Search";
import useCustomDebounce from "../hooks/useCustomDebounce";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const [loading, setLoading] = useState(false); // Ajout de l'état de chargement

  const debouncedSearch = useCustomDebounce(search, 500);

  const url =
    debouncedSearch === ""
      ? `https://api.themoviedb.org/3/trending/tv/day?language=fr-FR&api_key=${process.env.REACT_APP_API_KEY}`
      : `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&language=fr-FR`;

  const sortSeries = (series, sortOrder) => {
    if (!series || series.length === 0) return [];

    return [...series].sort((a, b) =>
      sortOrder === "top"
        ? b.vote_average - a.vote_average
        : a.vote_average - b.vote_average
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Démarrage du chargement
        setError(null); // Réinitialise l'erreur à chaque requête
        const res = await axios.get(url);

        if (!res.data || !res.data.results) {
          throw new Error("Aucune donnée reçue de l'API.");
        }

        setSeries(
          sortOrder === null
            ? res.data.results.slice(0, 16)
            : sortSeries(res.data.results, sortOrder)
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchData();
  }, [url, sortOrder]);

  const handleSearch = (term) => {
    console.log("term", term);
    setSearch(term);
    setSortOrder(null);
  };

  const resetSearch = () => {
    setSearch("");
    setSortOrder(null);
  };

  return (
    <div className="series">
      <Search
        placeholder="Entrez une série"
        getSearch={handleSearch}
        value={search}
      />
      <div className="buttons-sort">
        <button onClick={() => setSortOrder("top")} className="btn btn-top">
          Top <i className="fa-solid fa-arrow-up"></i>
        </button>
        <button onClick={() => setSortOrder("flop")} className="btn btn-flop">
          Flop <i className="fa-sharp fa-solid fa-arrow-down"></i>
        </button>
      </div>

      {loading ? (
        <p className="loader">🔄 Chargement des séries...</p>
      ) : error ? (
        <div className="error-message">
          <p>⚠️ Une erreur s'est produite : {error.message}</p>
        </div>
      ) : series.length > 0 ? (
        <ul className="results" style={{ listStyleType: "none" }}>
          {series.map((item) => (
            <Card key={item.id} show={item} />
          ))}
        </ul>
      ) : (
        <div className="no-results">
          <p>❌ Aucun résultat trouvé pour "{search}".</p>
          <p>Essayez une autre recherche ou réinitialisez :</p>
          <button onClick={resetSearch} className="btn btn-reset">
            🔄 Réinitialiser
          </button>
        </div>
      )}
    </div>
  );
};

export default Series;
