import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";

const Bookmarks = () => {
  
  const [bookmarkList, setBookmarkList] = useState(
    localStorage.hasOwnProperty("bookmarkIds")
      ? JSON.parse(localStorage.getItem("bookmarkIds"))
      : []
  );

  const [showObjects, setshowObjects] = useState([]);

  useEffect(() => {
    
    const getShowObject = async (id) => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=ee5257db9bf57231392a184bbd8e9562&language=fr-FR`
        );
        return res.data;
      } catch (error) {
        console.log('Erreur Appel API', error);
      }
    };

    const getAllObjects = async (ids) => {
      const data = ids.map((id) => getShowObject(id));
      const objects = await Promise.all(data);
      setshowObjects(objects);
    }

    getAllObjects(bookmarkList);
    
  }, [bookmarkList]);
  

  return (
    <div>
      <Header />
      <Title text="Favoris ❤️" />
      <ul style={{ listStyleType: "none" }}>
        {showObjects.length > 0 ? showObjects.map((item) => <Card key={item.id} show={item} />) : <li>Pas de favoris !</li>}
      </ul>
    </div>
  );
};

export default Bookmarks;