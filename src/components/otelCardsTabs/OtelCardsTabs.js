import React from "react";
import "./OtelCardsTabs.scss";
import { Tabs } from "antd";
import Information from "../otelCardsDetail/components/information/Information";
import Comments from "../otelCardsDetail/components/comments/Comments";
import Photograph from "../otelCardsDetail/components/photograph/Photograph";
import Prices from "../otelCardsDetail/components/prices/Prices";

const OtelCardsTabs = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Bilgi",
      children: <Information />,
    },
    {
      key: "2",
      label: "Fotoğraflar",
      children: <Photograph />,
    },
    {
      key: "3",
      label: "Yorumlar",
      children: <Comments />,
    },
    {
      key: "4",
      label: "Fiyatlar",
      children: <Prices />,
    },
  ];

  return (
    <div className="otelCardsTabs">
      <Tabs
        defaultActiveKey="1"
        centered
        items={items}
        onChange={onChange}
      ></Tabs>
    </div>
  );
};

export default OtelCardsTabs;
