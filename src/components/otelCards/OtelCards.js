import { useState } from "react";
import "./OtelCards.scss";
import { Button } from "antd";
import { ArrowRightOutlined, RightOutlined } from "@ant-design/icons";
import { BulbOutlined, BorderOuterOutlined } from "@ant-design/icons";
import OtelCardsTabs from "../otelCardsTabs/OtelCardsTabs";

const OtelCards = ({ filterOtelData, otelCardsDetail, setOtelCardsDetail }) => {
  const [clickedCardId, setClickedCardId] = useState(null);
  const handleClickCardsDetail = (cardId) => {
    setOtelCardsDetail(true);
    if (clickedCardId === cardId) {
      setClickedCardId(null);
    } else {
      setClickedCardId(cardId);
    }
  };

  return (
    <div className="otelCards">
      {otelCardsDetail === true ? (
        <div className="filterOtelsCard">
          {filterOtelData.map((el) => (
            <div className="otelsCards" key={el.id}>
              <div
                className="otelCard"
                onClick={() => handleClickCardsDetail(el.id)}
              >
                <div className="cardPhoto">
                  <img src={el.img} alt={el.name} />
                </div>
                <div className="cardText">
                  <h3>{el.name}</h3>
                  <div className="locationText">
                    <div className="evaluation">
                      <p>{el.type}</p>
                      <p>{el.star} Yıldız</p>
                    </div>
                    <div className="point">
                      <p>{el.point} Puan</p>
                      <p>
                        <span>
                          <BulbOutlined />
                        </span>
                        {el.city}
                      </p>
                    </div>
                  </div>
                  <div className="filterText">
                    <span>
                      <BorderOuterOutlined />
                      <p>{el.pool}</p>
                    </span>
                    <span>
                      <BorderOuterOutlined />
                      <p>{el.spa}</p>
                    </span>
                  </div>
                </div>
                <div className="cardDetail">
                  <p>Fiyatlar için tarihleri girin!</p>
                  <Button>
                    Tarih Seçin <RightOutlined />
                  </Button>
                  <a href="#">
                    Otel İncele <ArrowRightOutlined />
                  </a>
                </div>
              </div>
              {clickedCardId === el.id && <OtelCardsTabs />}
            </div>
          ))}
        </div>
      ) : (
        <div className="filterOtelsCard">
          {filterOtelData.map((el) => (
            <div className="otelsCards" key={el.id}>
              <div
                className="otelCard"
                onClick={() => handleClickCardsDetail(el.id)}
              >
                <div className="cardPhoto">
                  <img src={el.img} alt={el.name} />
                </div>
                <div className="cardText">
                  <h3>{el.name}</h3>
                  <div className="locationText">
                    <div className="evaluation">
                      <p>{el.type}</p>
                      <p>{el.star} Yıldız</p>
                    </div>
                    <div className="point">
                      <p>{el.point} Puan</p>
                      <p>
                        <span>
                          <BulbOutlined />
                        </span>
                        {el.city}
                      </p>
                    </div>
                  </div>
                  <div className="filterText">
                    <span>
                      <BorderOuterOutlined />
                      <p>{el.pool}</p>
                    </span>
                    <span>
                      <BorderOuterOutlined />
                      <p>{el.spa}</p>
                    </span>
                  </div>
                </div>
                <div className="cardDetail">
                  <p>Fiyatlar için tarihleri girin!</p>
                  <Button>
                    Tarih Seçin <RightOutlined />
                  </Button>
                  <a href="#">
                    Otel İncele <ArrowRightOutlined />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OtelCards;
