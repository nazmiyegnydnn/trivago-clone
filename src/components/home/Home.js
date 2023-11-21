import { useState } from 'react';
import Header from '../header/Header'
import './Home.scss'
import SearchBar from '../searchBar/SearchBar'
import Filtering from '../filtering/Filtering'
import Footer from '../footer/Footer'
import Main from '../main/Main'


const Home = () => {
  const [openModal, setOpenModal] = useState(null);
  const [openFiltiring, setOpenFiltiring] = useState(false);
  return (
    <div className='home'>
        <Header/>
        <div className='homePage'>
        <h2>Birçok siteden otel fiyatlarını karşılaştırıyoruz</h2>
       <div className='homeSearchBar'>
        <SearchBar
        openModal={openModal}
        setOpenModal={setOpenModal}
        openFiltiring={openFiltiring}
        setOpenFiltiring={setOpenFiltiring}
        />
       </div>
       {
        openFiltiring  ? (
          <div className='homeFilteringBar'>
          <Filtering
          openModal={openModal}
          setOpenModal={setOpenModal}/>
         </div>
        )
        :(
          ""
        )
       }
  
       <Main></Main>
        </div>
        <Footer/>
    </div>
  )
}

export default Home