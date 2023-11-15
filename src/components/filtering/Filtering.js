import React from 'react';
import "./Filtering.scss";
import ModalFilter from '../modalFilter/ModalFilter';
import PriceFilter from '../priceFilter/PriceFilter';
import Filter from '../filter/Filter';
import { DownOutlined } from '@ant-design/icons';


const Filtering = () => {


  return (
    <div className='filteringBar'>
    <div className='filtering'>
        <p>Fiyat:gecelik</p>
        <ModalFilter width="300px" top="20px" height="230px"  buttonLabel="₺0 - ₺16.000 +" buttonWidth="230px"   icon={<DownOutlined/>}><PriceFilter/></ModalFilter>
    </div>
    <div className='filtering'>
        <p>Filtre</p>
        <ModalFilter width="500px" top="20px" height="500px"  buttonLabel="Seç" buttonWidth="150px" icon={<DownOutlined/>} ><Filter></Filter></ModalFilter>
    </div>
    <div className='filtering'>
        <p>Misafir Puanı</p>
        <ModalFilter/>
    </div>
    <div className='filtering'>
        <p>Konaklama Tipi</p>
        <ModalFilter/>
    </div>
    <div className='filtering'>
        <p>Konum</p>
        <ModalFilter/>
    </div>
    </div>
  )
}

export default Filtering