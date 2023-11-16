import React, { useState } from 'react';
import "./ModalFilter.scss";
import { Button } from "antd";

const ModalFilter = (props) => {

  const {width, top, height, children, icon ,buttonLabel ,buttonWidth} = props
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className='modal-filter'>
      <Button icon={icon} onClick={handleClick} style={{width: buttonWidth }} >{buttonLabel || 'Misafir ve Odalar'}</Button>
      { isModalVisible && 
      <div className='modal' style={{width: width, top: top, height: height }}>
        {children}
        <div className='modalButtons'>
        <Button className='resetButton' >Sıfırla</Button>
        <Button className='applyButton'>Uygula</Button>
        </div>
      </div>
      }
    </div>

  )
}

export default ModalFilter