import React, { useState, useEffect } from "react";
import "./ModalFilter.scss";
import { Button } from "antd";

const ModalFilter = (props) => {
  const {
    width,
    top,
    height,
    children,
    icon,
    buttonLabel,
    buttonWidth,
    isOpen,
    onOpen,
    onClose,
    setInputAdultValue,
    setInputChildValue,
    setInputRoomValue,
    setInputPriceValue,
  } = props;
  const [isModalVisible, setIsModalVisible] = useState(isOpen || false);

  useEffect(() => {
    setIsModalVisible(isOpen || false);
  }, [isOpen]);

  const handleClick = () => {
    if (isOpen !== undefined) {
      if (isModalVisible) {
        onClose && onClose();
      } else {
        onOpen && onOpen();
      }
    } else {
      setIsModalVisible(!isModalVisible);
    }
  };

  const handleResetButton = () => {
    setInputAdultValue(0);
    setInputChildValue(0);
    setInputRoomValue(0);
    setInputPriceValue(0);
  };

  return (
    <div className="modal-filter">
      <Button icon={icon} onClick={handleClick} style={{ width: buttonWidth }}>
        {buttonLabel || "Misafir ve Odalar"}
      </Button>
      {isModalVisible && (
        <div
          className="modal"
          style={{ width: width, top: top, height: height }}
        >
          {children}
          <div className="modalButtons">
            <Button className="resetButton" onClick={handleResetButton}>
              Sıfırla
            </Button>
            <Button className="applyButton">Uygula</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalFilter;
