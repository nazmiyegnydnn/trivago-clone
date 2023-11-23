import React  from "react";
import "./Main.scss";
import { BulbOutlined, BorderOuterOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Button, Select } from "antd";
import {
  ArrowRightOutlined,
  RightOutlined,
} from "@ant-design/icons";

const Main = ({ trivagoDownload ,openFiltiring ,filterOtelData ,setFilterOtelData}) => {
  const { otelDatas } = useSelector((state) => state.app);
  const firstThreeItems = otelDatas.slice(0, 3);
  const handleChange = (value) => {
    if (value === 'Puan ve Tavsiye') {
      const sortedData = [...filterOtelData].sort((a, b) => b.point - a.point);
      setFilterOtelData(sortedData);
    }
    if (value === 'Yıldız') {
      const starData = [...filterOtelData].sort((a, b) => b.star - a.star);
      setFilterOtelData(starData);
    }
  };


  return (
    <div className="main">
      {filterOtelData.length > 0  && openFiltiring === true ? (
        <div className="mainLeft">
          <div className="arrangement">
            <p>Sıralama</p>
            <Select
            className="select"
      defaultValue="Tavsiyelerimiz"
      onChange={handleChange}
      options={[
        {
          value: 'Tavsiyelerimiz',
          label: 'Tavsiyelerimiz',
        },
        {
          value: 'Puan ve Tavsiye',
          label: 'Puan ve Tavsiye',
        },
        {
          value: 'Fiyat ve Tavsiye',
          label: 'Fiyat ve Tavsiye',
        },
        {
          value: 'Uzaklık ve Tavsiye',
          label: 'Uzaklık ve Tavsiye',
        },
        {
          value: 'Sadece Puan',
          label: 'Sadece Puan',
        },
        {
          value: 'Sadece Fiyat',
          label: 'Sadece Fiyat',
        },
        {
          value: 'Yıldız',
          label: 'Yıldız',
        },
      ]}
    />
          </div>
          <div className="filterOtelsMain">
            <div className="filterOtelsCard">
              {filterOtelData.map((el) => (
                <div className="otelsCard" key={el.id}>
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
              ))}
            </div>
            <div className="otelMap">Haritalar</div>
          </div>
        </div>
      ) : (
        <div className="otelsMain">
          <h3>Popüler Oteller</h3>
          <div className="popülerOtelsCard">
            {firstThreeItems.map((item, index) => (
              <div key={index} className="otelCards">
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <div className="locationText">
                  <p>{item.point}</p>
                  <p>
                    <span>
                      <BulbOutlined />
                    </span>
                    {item.city}
                  </p>
                </div>
                <div className="filterText">
                  <span>
                    <BorderOuterOutlined />
                    <p>{item.pool}</p>
                  </span>
                  <span>
                    <BorderOuterOutlined />
                    <p>{item.spa}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h3>En Yüksek Puanlı Oteller</h3>
          <div className="popülerOtelsCard">
            {firstThreeItems.map((item, index) => (
              <div key={index} className="otelCards">
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <div className="locationText">
                  <p>{item.point}</p>
                  <p>
                    <span>
                      <BulbOutlined />
                    </span>
                    {item.city}
                  </p>
                </div>
                <div className="filterText">
                  <span>
                    <BorderOuterOutlined />
                    <p>{item.pool}</p>
                  </span>
                  <span>
                    <BorderOuterOutlined />
                    <p>{item.spa}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {trivagoDownload === true ? (
        <div className="trivagoDownload">
          <div className="downloadText">
            <h4>trivago uygulamasını indirin</h4>
            <p>
              Mobil uygulamadan otel fiyatlarını kolayca karşılaştırın ve kazanç
              sağlayın.
            </p>
          </div>
          <div className="downloadImg"></div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Main;
