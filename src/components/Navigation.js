import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
        <ul>
            <NavLink to="/">
                <li>Accueil</li>
            </NavLink>
            <NavLink to="/bookmarks">
                <li>Favoris</li>
            </NavLink>
        </ul>
    </nav>
  )
}

export default Navigation