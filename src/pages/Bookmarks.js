import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";
import ReturnToTop from "../components/ReturnToTop";

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
          `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
        );
        return res.data;
      } catch (error) {
        console.log("Erreur Appel API", error);
      }
    };

    const getAllObjects = async (ids) => {
      const data = ids.map((id) => getShowObject(id));
      const objects = await Promise.all(data);
      setshowObjects(objects);
    };

    getAllObjects(bookmarkList);
  }, [bookmarkList]);

  const deleteBookmarkFromList = (idToDelete) => {
    const listOfIds = bookmarkList.filter((id) => id !== idToDelete);
    setBookmarkList(listOfIds);
  };

  return (
    <div className="bookmarks">
      <Header />
      <div style={{margin: "25px 0"}}>
        <Title text="Favoris ❤️" />
      </div>
      <p className="bookmarks-counter">
        Vous avez {bookmarkList.length} série
        {bookmarkList.length <= 1 ? "" : "s"} mise
        {bookmarkList.length <= 1 ? "" : "s"} en favori
      </p>
      <ul className="bookmarks-results">
        {showObjects.length > 0 ? (
          showObjects.map((item) => (
            <Card
              key={item.id}
              show={item}
              deleteBookmark={deleteBookmarkFromList}
            />
          ))
        ) : (
          <li>Pas de favoris !</li>
        )}
      </ul>
      <ReturnToTop />
    </div>
  );
};

export default Bookmarks;
