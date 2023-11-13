import React from 'react'
import Header from '../header/Header'
import './Home.scss'
import SearchBar from '../searchBar/SearchBar'
import Filtering from '../filtering/Filtering'
import Footer from '../footer/Footer'

const Home = () => {
  
  return (
    <div className='home'>
        <Header/>
        <div className='homePage'>
        <h2>Birçok siteden otel fiyatlarını karşılaştırıyoruz</h2>
       <div className='homeSearchBar'>
        <SearchBar/>
       </div>
       <div className='homeFilteringBar'>
        <Filtering/>
       </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home