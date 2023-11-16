import React, { useState } from 'react';
import "./Location.scss";
import { Input ,InputNumber , Slider} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;

const Location = () => {
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
    setInputValue(newValue);
    };



  return (
    <div className='location'>
     <h5>Şuraya yakın bir konaklama yeri bul</h5>
     <p>bu popüler yer:</p>
     <Input
     placeholder='Şehir merkezi '
     />
     <p>veya bu adres:</p>
     <Search
      placeholder="Adres/posto kodunu girin"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    <div className='slider'>
    <h5>Maksimum mesafe</h5>
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
    </div>
  )
}

export default Location