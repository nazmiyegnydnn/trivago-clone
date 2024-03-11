import React from "react";
import "./Main.scss";
import { BulbOutlined, BorderOuterOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Select } from "antd";
import OtelCards from "../otelCards/OtelCards";

const Main = ({
  trivagoDownload,
  openFiltiring,
  filterOtelData,
  setFilterOtelData,
  otelCardsDetail,
  setOtelCardsDetail,
}) => {
  const { otelDatas } = useSelector((state) => state.app);
  const firstThreeItems = otelDatas.slice(0, 3);
  // const handleChange = (value) => {
  //   if (value === 'Puan ve Tavsiye') {
  //     const sortedData = [...filterOtelData].sort((a, b) => b.point - a.point);
  //     setFilterOtelData(sortedData);
  //   }
  //   if (value === 'Yıldız') {
  //     const starData = [...filterOtelData].sort((a, b) => b.star - a.star);
  //     setFilterOtelData(starData);
  //   }
  // };
  const handleChange = (value) => {
    //bu yukarıdaki filtreleme işleminin kısa hali
    const filterFunctions = {
      "Puan ve Tavsiye": (a, b) => b.point - a.point,
      Yıldız: (a, b) => b.star - a.star,
      // Diğer filtreleme kriterlerini ekle
    };
    const filterFunction = filterFunctions[value];
    if (filterFunction) {
      const sortedData = [...filterOtelData].sort(filterFunction);
      setFilterOtelData(sortedData);
    }
  };

  return (
    <div className="main">
      {filterOtelData.length > 0 && openFiltiring === true ? (
        <>
          <div className="mainButtonBar">
            <div className="arrangement">
              <p>Sıralama</p>
              <Select
                className="select"
                defaultValue="Tavsiyelerimiz"
                onChange={handleChange}
                options={[
                  {
                    value: "Tavsiyelerimiz",
                    label: "Tavsiyelerimiz",
                  },
                  {
                    value: "Puan ve Tavsiye",
                    label: "Puan ve Tavsiye",
                  },
                  {
                    value: "Fiyat ve Tavsiye",
                    label: "Fiyat ve Tavsiye",
                  },
                  {
                    value: "Uzaklık ve Tavsiye",
                    label: "Uzaklık ve Tavsiye",
                  },
                  {
                    value: "Sadece Puan",
                    label: "Sadece Puan",
                  },
                  {
                    value: "Sadece Fiyat",
                    label: "Sadece Fiyat",
                  },
                  {
                    value: "Yıldız",
                    label: "Yıldız",
                  },
                ]}
              />
            </div>
            <div className="mapSearchButton">
              <button className="mapButton">
                <p>Haritayı Görüntüle</p>
              </button>
            </div>
          </div>
          <div className="filterOtelsMain">
            <OtelCards
              filterOtelData={filterOtelData}
              otelCardsDetail={otelCardsDetail}
              setOtelCardsDetail={setOtelCardsDetail}
            />
          </div>
        </>
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
