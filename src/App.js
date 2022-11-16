import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bookmarks from './pages/Bookmarks'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import GenresContextProvider from './context/GenresContext'

const App = () => {
  return (
    <GenresContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/react-tv/" element={<Home />} />
          <Route path="/react-tv/bookmarks" element={<Bookmarks />} />
          <Route path="/react-tv/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GenresContextProvider>
  )
}

export default App
