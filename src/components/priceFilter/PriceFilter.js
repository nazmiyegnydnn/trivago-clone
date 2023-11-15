import React, { useState } from 'react';
import {Button, InputNumber,Slider } from 'antd';
import "./PriceFilter.scss";


const PriceFilter = () => {
const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
    setInputValue(newValue);
    };
      
  return (
    <div className='priceFilter'> 
    <h4>Fiyat aralığını belirleyin</h4>
    <div className='slider'>
    <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
    </div>
    <div className='inputNumber'>
    <InputNumber
          min={1}
          max={20}
          style={{
            margin: '0 16px',
          }}
          value={inputValue}
          onChange={onChange}
        />
    </div>
    <div className='resetApply'>
        <Button className='reset'>Sıfırla</Button>
        <Button>Uygula</Button>
    </div>
    </div>
  )
}

export default PriceFilter