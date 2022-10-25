import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/fr";
import { GenresContext } from "../context/GenresContext";
import Modal from "./Modal";

const Card = ({ show, deleteBookmark }) => {
  const { listAllGenres } = useContext(GenresContext);

  const genres_ids = show.genre_ids
    ? show.genre_ids
    : show.genres.map((genre) => genre.id);

  const [genres, setGenres] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const getBookmarks = () => {
    // récupère la liste des ids depuis le LS
    return localStorage.hasOwnProperty("bookmarkIds")
      ? JSON.parse(localStorage.getItem("bookmarkIds"))
      : [];
  };

  useEffect(() => {
    // récupère genres de la série
    setGenres(
      listAllGenres
        .filter((item) => genres_ids.includes(item.id))
        .map((genre) => genre.name)
    );

    // vérifie si série fait partie des favoris
    const checkBookmarked = (id) => {
      const listOfIds = getBookmarks();

      if (listOfIds.includes(id)) {
        setIsBookmarked(true);
      }
    };

    checkBookmarked(show.id);
  }, []);

  const getTime = (time) => {
    return moment(time).format("L");
  };

  const handleBookmark = (id) => {
    const listOfIds = getBookmarks();

    if (!isBookmarked) {
      listOfIds.push(id);
      setIsBookmarked(true);
    } else {
      const index = listOfIds.indexOf(id);
      listOfIds.splice(index, 1);
      if (deleteBookmark) {
        deleteBookmark(id);
      }
      setIsBookmarked(false);
    }

    // met à jour le LocalStorage
    localStorage.setItem("bookmarkIds", JSON.stringify(listOfIds));
  };

  return (
    <li className="card">
      <div className="card-img-container">
        <img
          className="card-img"
          src={
            show.poster_path
              ? `https://image.tmdb.org/t/p/original${show.poster_path}`
              : "/react-tv/img/poster.jpg"
          }
          alt={`affiche de ${show.name}`}
        />
      </div>
      <div className="card-content">
        <h2 className="card-title">{show.name}</h2>
        <p className="card-date">
          Sortie le :{" "}
          {show.first_air_date
            ? getTime(show.first_air_date)
            : "date non disponible"}
        </p>
        <div className="card-rating-container">
          <p className="card-rating">
            {(Math.round(show.vote_average * 10) / 10).toFixed(1)}/10
          </p>
          <i className="fa-sharp fa-solid fa-star"></i>
        </div>
        <ul className="card-genres">
          {genres && genres.map((genre) => <li key={genre}>{genre}</li>)}
        </ul>
        {show.overview ? <h3 className="card-synopsis-title">Synopsis</h3> : ""}
        {show.overview ? (
          show.overview.length < 200 ? (
            <p className="card-synopsis">{show.overview}</p>
          ) : (
            <p className="card-synopsis">
              {show.overview.slice(0, 200) + "... "}
              <button
                className="card-synopsis-btn-showmore"
                onClick={() => setShowModal(true)}
              >
                Lire la suite
              </button>
            </p>
          )
        ) : (
          ""
        )}
      </div>
      <button
        onClick={() => handleBookmark(show.id)}
        className={isBookmarked ? "card-btn btn bookmarked" : "card-btn btn"}
      >
        {isBookmarked ? "Retirer des favoris" : "Ajouter aux favoris"}
      </button>
      <Modal
        onClose={() => setShowModal(false)}
        showModal={showModal}
        show={show}
      />
    </li>
  );
};

export default Card;
