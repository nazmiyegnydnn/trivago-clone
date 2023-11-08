import React from 'react'
import Header from '../header/Header'
import './Home.scss'
import SearchBar from '../searchBar/SearchBar'
const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <div className='homePage'>
        <h2>Birçok siteden otel fiyatlarını karşılaştırıyoruz</h2>
       <div className='homeSearchBar'>
        <SearchBar/>
       </div>
        </div>
    </div>
  )
}

export default Home