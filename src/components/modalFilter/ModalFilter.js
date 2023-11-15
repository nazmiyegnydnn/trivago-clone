import React, { useState } from 'react';
import "./ModalFilter.scss";
import { Button } from "antd";

const ModalFilter = (props) => {

  const {width, top, height, children, icon ,buttonLabel ,buttonWidth } = props
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClick = () => {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <div className='modal-filter'>
      <Button icon={icon} onClick={handleClick} style={{width: buttonWidth , name:buttonLabel }} >{buttonLabel || 'Misafir ve Odalar'}</Button>
      { isModalVisible && 
      <div className='modal' style={{width: width, top: top, height: height }}>
        {children}
      </div>
      }
    </div>

  )
}

export default ModalFilter