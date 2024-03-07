import React from "react";
import "./Accomodation.scss";
import { Radio } from "antd";

const Accomodation = () => {
  return (
    <div className="accomodation">
      <ul>
        <li>
          <Radio>Tümü</Radio>
        </li>
        <li>
          <Radio>Otel</Radio>
        </li>
        <li>
          <Radio>Ev/Apart Daire</Radio>
        </li>
      </ul>
    </div>
  );
};

export default Accomodation;
