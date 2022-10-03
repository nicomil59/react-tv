import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Search from "./Search";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const url = search === '' ? 
    "https://api.themoviedb.org/3/tv/popular?api_key=ee5257db9bf57231392a184bbd8e9562&language=fr-FR&page=1"
    :
    `https://api.themoviedb.org/3/search/tv?api_key=ee5257db9bf57231392a184bbd8e9562&query=${search}&language=fr-FR`;

  useEffect(() => {
    axios.get(url)
      .then((res) => setSeries(res.data.results))
      .catch(error => {
        setError(error);
      })
  }, [url]);

  if (error) return `Error: ${error.message}`;

  const handleSearch = term => {
    console.log("term", term);
    setSearch(term);
  }

  return (
    <div>
      <Search placeholder="Entrez une série" getSearch={handleSearch} />
      <ul style={{ listStyleType: "none" }}>
        {series.length > 0 ? series.map((item) => <Card key={item.id} show={item} />) : <li>Pas de données !</li>}
      </ul>
    </div>
  );
};

export default Series;
