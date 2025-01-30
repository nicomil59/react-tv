import React, { useState } from "react";
import Card from "./Card";
import Search from "./Search";
import useCustomDebounce from "../hooks/useCustomDebounce";
import useFetchSeries from "../hooks/useFetchSeries"; 
import useSortedSeries from "../hooks/useSortedSeries";

const Series = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("none");
  const debouncedSearch = useCustomDebounce(search, 500);

  const { series, error, loading } = useFetchSeries(debouncedSearch, sortOrder);
  const sortedSeries = useSortedSeries(series, sortOrder);

  const handleSearch = (term) => {
    setSearch(term);
    setSortOrder("none");
  };

  const resetSearch = () => {
    setSearch("");
    setSortOrder("none");
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
          {sortedSeries.map((item) => (
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
