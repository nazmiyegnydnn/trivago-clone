import React from "react";
import { InputNumber, Slider } from "antd";
import "./PriceFilter.scss";

const PriceFilter = ({ inputPriceValue, setInputPriceValue }) => {
  const onChange = (newValue) => {
    setInputPriceValue(newValue);
  };

  return (
    <div className="priceFilter">
      <h4>Fiyat aralığını belirleyin</h4>
      <div className="slider">
        <Slider
          min={0}
          max={20}
          onChange={onChange}
          value={typeof inputPriceValue === "number" ? inputPriceValue : 0}
        />
      </div>
      <div className="inputNumber">
        <InputNumber
          min={0}
          max={16.0}
          style={{
            margin: "0 16px",
          }}
          value={inputPriceValue}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
