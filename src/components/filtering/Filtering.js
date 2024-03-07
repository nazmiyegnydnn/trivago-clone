import React, { useState } from "react";
import "./Filtering.scss";
import { DownOutlined } from "@ant-design/icons";
import ModalFilter from "../modalFilter/ModalFilter";
import PriceFilter from "../priceFilter/PriceFilter";
import Filter from "../filter/Filter";
import GuestScore from "../guestScore/GuestScore";
import Accomodation from "../accomodation/Accomodation";
import Location from "../location/Location";

const Filtering = ({ openModal, setOpenModal }) => {
  const [inputPriceValue, setInputPriceValue] = useState(0);

  const handleModalOpen = (modalName) => {
    setOpenModal(modalName);
  };

  const handleModalClose = () => {
    setOpenModal(null);
  };
  return (
    <div className="filteringBar">
      <div className="filtering">
        <p>Fiyat:gecelik</p>
        <ModalFilter
          width="300px"
          top="20px"
          height="230px"
          buttonLabel="₺0 - ₺16.000 +"
          buttonWidth="300px"
          borderRadius="20px"
          icon={<DownOutlined />}
          isOpen={openModal === "PriceFilter"}
          onOpen={() => handleModalOpen("PriceFilter")}
          onClose={handleModalClose}
          inputPriceValue={inputPriceValue}
          setInputPriceValue={setInputPriceValue}
        >
          <PriceFilter
            inputPriceValue={inputPriceValue}
            setInputPriceValue={setInputPriceValue}
          />
        </ModalFilter>
      </div>
      <div className="filtering">
        <p>Filtre</p>
        <ModalFilter
          width="500px"
          top="20px"
          height="500px"
          buttonLabel="Seç"
          buttonWidth="150px"
          icon={<DownOutlined />}
          isOpen={openModal === "Filter"}
          onOpen={() => handleModalOpen("Filter")}
          onClose={handleModalClose}
        >
          <Filter></Filter>
        </ModalFilter>
      </div>
      <div className="filtering">
        <p>Misafir Puanı</p>
        <ModalFilter
          width="300px"
          top="20px"
          height="320px"
          buttonLabel="Tümü"
          buttonWidth="150px"
          icon={<DownOutlined />}
          isOpen={openModal === "GuestScore"}
          onOpen={() => handleModalOpen("GuestScore")}
          onClose={handleModalClose}
        >
          <GuestScore />
        </ModalFilter>
      </div>
      <div className="filtering">
        <p>Konaklama Tipi</p>
        <ModalFilter
          width="300px"
          top="20px"
          height="250px"
          buttonLabel="Tümü"
          buttonWidth="150px"
          icon={<DownOutlined />}
          isOpen={openModal === "Accomodation"}
          onOpen={() => handleModalOpen("Accomodation")}
          onClose={handleModalClose}
          b
        >
          <Accomodation />
        </ModalFilter>
      </div>
      <div className="filtering">
        <p>Konum</p>
        <ModalFilter
          width="250px"
          top="20px"
          height="430px"
          buttonLabel="Şehir merkezi"
          buttonWidth="150px"
          icon={<DownOutlined />}
          isOpen={openModal === "Location"}
          onOpen={() => handleModalOpen("Location")}
          onClose={handleModalClose}
        >
          <Location />
        </ModalFilter>
      </div>
    </div>
  );
};

export default Filtering;
