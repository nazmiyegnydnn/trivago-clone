import React from "react";
import "./GuestScore.scss";
import { Button } from "antd";

const GuestScore = ({setSelectedPuan , selectedPuan }) => {
  const handleButtonClick = (puan) => {
    setSelectedPuan(puan);
  };

  return (
    <div className="guestScore">
      <div className="point">
        <ul>
          <li>
          <Button 
            className={`pointButton ${selectedPuan === 9 ? "selected" : ""}`}
           onClick={() => handleButtonClick(9)}>
              <span>9</span>
            </Button>
            <p>Mükkemmel</p>
          </li>
          <li>
          <Button
           className={`pointButton ${selectedPuan === 8 ? "selected" : ""}`} 
          onClick={() => handleButtonClick(8)}>
              <span>8</span>
            </Button>
            <p>Çok iyi</p>
          </li>
          <li>
          <Button 
           className={`pointButton ${selectedPuan === 7 ? "selected" : ""}`}
          onClick={() => handleButtonClick(7)}>
              <span>7</span>
            </Button>
            <p>İyi</p>
          </li>
          <li>
          <Button 
           className={`pointButton ${selectedPuan === 6 ? "selected" : ""}`}
          onClick={() => handleButtonClick(6)}>
              <span>6</span>
            </Button>
            <p>Fena değil</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GuestScore;
