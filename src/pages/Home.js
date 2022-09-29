import React from 'react'
import Header from '../components/Header'
import Series from '../components/Series'
import Title from '../components/Title'

const Home = () => {
  return (
    <div>
      <Header />
      <Title text="Accueil" />
      <Series />
    </div>
  )
}

export default Home