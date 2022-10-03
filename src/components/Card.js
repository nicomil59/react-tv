import React from 'react'

const Card = ( {show }) => {
  return (
    <li className='card' style={{marginBottom: "30px", background: "#F7F7F7"}}>
        <img style={{maxWidth: "150px", height: "auto"}} className='card-img' src={show.poster_path ? `https://image.tmdb.org/t/p/original${show.poster_path}` : './img/poster.jpg'} alt={`affiche de ${show.name}`} />
        <div className="card-content">
            <h2 className="card-title">{show.name}</h2>
            <p className='card-date'>Sortie le {show.first_air_date}</p>
            <p className='card-rating'>{show.vote_average}/10 ⭐️</p>
            <p>Genres</p>
            <h3>Synopsis</h3>
            <p className="card-synopsis">{show.overview}</p>
        </div>
        <button className='card-btn btn'>Ajouter aux favoris</button>
    </li>
  )
}

export default Card