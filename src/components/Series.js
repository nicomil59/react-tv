import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Search from "./Search";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(null);

  const url =
    search === ""
      ? `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1`
      : `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&language=fr-FR`;

  const sortSeries = (series, sortOrder) => {
    if (sortOrder === "top") {
      return series.sort((a, b) => b.vote_average - a.vote_average);
    } else if (sortOrder === "flop") {
      return series.sort((a, b) => a.vote_average - b.vote_average);
    }
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (sortOrder === null) {
          setSeries(res.data.results);
        } else {
          setSeries(sortSeries(res.data.results, sortOrder));
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, [url, sortOrder]);

  // if (error) return `Error: ${error.message}`;

  const handleSearch = (term) => {
    console.log("term", term);
    setSearch(term);
    setSortOrder(null);
  };

  return (
    <div className="series">
      <Search placeholder="Entrez une série" getSearch={handleSearch} />
      <div className="buttons-sort">
        <button onClick={() => setSortOrder("top")} className="btn btn-top">
          Top <i className="fa-solid fa-arrow-up"></i>
        </button>
        <button onClick={() => setSortOrder("flop")} className="btn btn-flop">
          Flop <i className="fa-sharp fa-solid fa-arrow-down"></i>
        </button>
      </div>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul className="results" style={{ listStyleType: "none" }}>
          {series.length > 0 ? (
            series.map((item) => <Card key={item.id} show={item} />)
          ) : (
            <li>Aucun résultat trouvé.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Series;
