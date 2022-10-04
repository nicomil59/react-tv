import React, { useEffect, useState } from 'react'
import axios from "axios";
import moment from 'moment';
import 'moment/locale/fr';

const Card = ( {show }) => {
  
  const genres_ids = show.genre_ids;
  // console.log(genres_ids);

  const [genres, setGenres] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getBookmarks = () => {
    // récupère la liste des ids depuis le LS
    return localStorage.hasOwnProperty('bookmarkIds') ? JSON.parse
    (localStorage.getItem('bookmarkIds')) : [];
  }

  
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=ee5257db9bf57231392a184bbd8e9562&language=fr-FR`)
    .then((res) => {
      const listGenres = res.data.genres;
      // console.log(listGenres);
      // console.log(listGenres.filter(item => show.genre_ids.includes(item.id)));
      setGenres(listGenres.filter(item => genres_ids.includes(item.id)).map(genre => genre.name));
    });

    const checkBookmarked = id => {
      const listOfIds = getBookmarks();
  
      if (listOfIds.includes(id)) {
        setIsBookmarked(true);
      }
    }

    checkBookmarked(show.id);
  }, [genres_ids, show.id])

  const getTime = time => {
    return moment(time).format('L');
  }

  const handleBookmark = id => {
    
    console.log('handlebookmark !')
    
    const listOfIds = getBookmarks();

    if (!isBookmarked) {
      listOfIds.push(id);
      setIsBookmarked(true);
    } else {
      const index = listOfIds.indexOf(id);
      listOfIds.splice(index, 1);
      setIsBookmarked(false); 
    }

    // met à jour le LS
    localStorage.setItem('bookmarkIds', JSON.stringify(listOfIds));
  }
  
  return (
    <li className='card' style={{marginBottom: "30px", background: "#F7F7F7"}}>
        <img style={{maxWidth: "150px", height: "auto"}} className='card-img' src={show.poster_path ? `https://image.tmdb.org/t/p/original${show.poster_path}` : './img/poster.jpg'} alt={`affiche de ${show.name}`} />
        <div className="card-content">
            <h2 className="card-title">{show.name}</h2>
            <p className='card-date'>Sortie le {getTime(show.first_air_date)}</p>
            <p className='card-rating'>{show.vote_average}/10 ⭐️</p>
            <ul>
              {genres && genres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
            <h3>Synopsis</h3>
            <p className="card-synopsis">{show.overview}</p>
        </div>
        <button onClick={() => handleBookmark(show.id)} className='card-btn btn'>{isBookmarked ? "Retirer des favoris" : "Ajouter aux favoris"}</button>
    </li>
  )
}

export default Card