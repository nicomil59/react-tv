import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
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
          <Route path="/404" element={<NotFound />} />
          <Route path='*' element={<Navigate replace to='/404'/>} />
        </Routes>
      </BrowserRouter>
    </GenresContextProvider>
  )
}

export default App
