import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GenresContext = createContext();

const GenresContextProvider = (props) => {
  const [listAllGenres, setListAllGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=ee5257db9bf57231392a184bbd8e9562&language=fr-FR`
      )
      .then((res) => {
        setListAllGenres(res.data.genres);
      });
  }, []);

  return (
    <GenresContext.Provider value={{ listAllGenres }}>
      {props.children}
    </GenresContext.Provider>
  );
};

export default GenresContextProvider;
