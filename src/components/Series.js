import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Series = () => {
  const [series, setSeries] = useState([]);

  const url = "https://api.themoviedb.org/3/tv/popular?api_key=ee5257db9bf57231392a184bbd8e9562&language=fr-FR&page=1";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setSeries(res.data.results));
  }, []);

  return (
  <div>
        <ul style={{listStyleType: "none"}}>
            {series && series.map(item => <Card key={item.id} show={item} />)}
        </ul>
  </div>
  );
};

export default Series;
