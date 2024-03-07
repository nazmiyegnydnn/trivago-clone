import React from "react";
import "./Photograph.scss";
import { Carousel } from "antd";
import OtelDetayOne from "../../../../images/OtelDetayOne.webp";
import OtelDetayTwo from "../../../../images/OtelDetayTwo.jpeg";
import OtelDetayThree from "../../../../images/OtelDetayThree.webp";
import CloseButton from "../../../closeButton/CloseButton";

const contentStyle = {
  margin: 0,
  height: "20 0px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Photograph = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="photograph">
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <img src={OtelDetayOne} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={OtelDetayTwo} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={OtelDetayThree} />
          </h3>
        </div>
      </Carousel>
      <CloseButton />
    </div>
  );
};

export default Photograph;
