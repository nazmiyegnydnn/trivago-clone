import { useState } from "react";
import Header from "../header/Header";
import "./Home.scss";
import SearchBar from "../searchBar/SearchBar";
import Filtering from "../filtering/Filtering";
import Footer from "../footer/Footer";
import Main from "../main/Main";

const Home = () => {
  const [openModal, setOpenModal] = useState(null);
  const [openFiltiring, setOpenFiltiring] = useState(false);
  const [trivagoDownload, setTrivagoDownload] = useState(true);
  const [filterOtelData, setFilterOtelData] = useState([]);
  const [otelCardsDetail, setOtelCardsDetail] = useState(false);
  return (
    <div className="home">
      <Header />
      <div className="homePage">
        <h2>Birçok siteden otel fiyatlarını karşılaştırıyoruz</h2>
        <div className="homeSearchBar">
          <SearchBar
            openModal={openModal}
            setOpenModal={setOpenModal}
            openFiltiring={openFiltiring}
            setOpenFiltiring={setOpenFiltiring}
            setTrivagoDownload={setTrivagoDownload}
            filterOtelData={filterOtelData}
            setFilterOtelData={setFilterOtelData}
          />
        </div>
        {openFiltiring ? (
          <div className="homeFilteringBar">
            <Filtering 
            setFilterOtelData={setFilterOtelData}
            filterOtelData={filterOtelData}
            openModal={openModal} 
            setOpenModal={setOpenModal}
             />
          </div>
        ) : (
          ""
        )}

        <Main
          trivagoDownload={trivagoDownload}
          openFiltiring={openFiltiring}
          filterOtelData={filterOtelData}
          setFilterOtelData={setFilterOtelData}
          otelCardsDetail={otelCardsDetail}
          setOtelCardsDetail={setOtelCardsDetail}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
