import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bookmarks from './pages/Bookmarks'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
