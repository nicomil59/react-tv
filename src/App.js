import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bookmarks from './pages/Bookmarks'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import GenresContextProvider from './context/GenresContext'

const App = () => {
  return (
    <GenresContextProvider basename="/react-tv">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GenresContextProvider>
  )
}

export default App
