import React from "react";
import "./GuestFilter.scss";
import { Button, Input } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const GuestFilter = ({
  inputAdultValue,
  setInputAdultValue,
  inputChildValue,
  setInputChildValue,
  inputRoomValue,
  setInputRoomValue,
}) => {
  const handleDecrease = (type) => {
    if (type === "adult") {
      const newValue = inputAdultValue - 1;
      setInputAdultValue(newValue >= 0 ? newValue : 0);
    } else if (type === "child") {
      const newValue = inputChildValue - 1;
      setInputChildValue(newValue >= 0 ? newValue : 0);
    } else {
      const newValue = inputRoomValue - 1;
      setInputRoomValue(newValue >= 0 ? newValue : 0);
    }
  };

  const handleIncrease = (type) => {
    if (type === "adult") {
      const newValue = inputAdultValue + 1;
      setInputAdultValue(newValue >= 0 ? newValue : 0);
    } else if (type === "child") {
      const newValue = inputChildValue + 1;
      setInputChildValue(newValue >= 0 ? newValue : 0);
    } else {
      const newValue = inputRoomValue + 1;
      setInputRoomValue(newValue >= 0 ? newValue : 0);
    }
  };

  return (
    <div className="guestFilter">
      <div className="guest">
        <div className="guestText">
          <p>Yetişkin</p>
        </div>
        <div className="guestButtons">
          <ul>
            <li>
              <Button
                className="decrease"
                onClick={() => handleDecrease("adult")}
              >
                <MinusOutlined />
              </Button>
            </li>
            <li>
              <Input value={inputAdultValue} placeholder="0" />
            </li>
            <li>
              <Button
                className="increase"
                onClick={() => handleIncrease("adult")}
              >
                <PlusOutlined />
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="guest">
        <div className="guestText">
          <p>Çocuk</p>
        </div>
        <div className="guestButtons">
          <ul>
            <li>
              <Button onClick={() => handleDecrease("child")}>
                <MinusOutlined />
              </Button>
            </li>
            <li>
              <Input value={inputChildValue} placeholder="0" />
            </li>
            <li>
              <Button onClick={() => handleIncrease("child")}>
                <PlusOutlined />
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="guest">
        <div className="guestText">
          <p>Oda</p>
        </div>
        <div className="guestButtons">
          <ul>
            <li>
              <Button onClick={() => handleDecrease("room")}>
                <MinusOutlined />
              </Button>
            </li>
            <li>
              <Input value={inputRoomValue} placeholder="0" />
            </li>
            <li>
              <Button onClick={() => handleIncrease("room")}>
                <PlusOutlined />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GuestFilter;
