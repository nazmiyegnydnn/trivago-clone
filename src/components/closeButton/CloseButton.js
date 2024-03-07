import React from "react";
import "./CloseButton.scss";
import ShareButton from "../shareButton/ShareButton";
import { Button } from "antd";

const CloseButton = () => {
  return (
    <div className="closeButton">
      <hr className="line" />
      <div className="tabButtons">
        <ShareButton />
        <Button>Kapat</Button>
      </div>
    </div>
  );
};

export default CloseButton;
