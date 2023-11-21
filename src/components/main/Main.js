import React from 'react';
import "./Main.scss";
import { BulbOutlined, BorderOuterOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { Button  } from "antd";
import { ArrowRightOutlined ,RightOutlined} from '@ant-design/icons'

const Main = () => {
  const { filterOtelData } = useSelector((state) => state.app);
  const { otelDatas } = useSelector((state) => state.app);
  const firstFiveItems = otelDatas.slice(0, 3);

  return (
    <div className='main'>
      {filterOtelData.length > 0 ? (
        <div className='filterOtelsMain'> 
            <div className='filterOtelsCard'>
            {filterOtelData.map((el) => (
            <div className='otelsCard'  key={el.id}>
              <div className='cardPhoto'>
              <img src={el.img} alt={el.name} />
              </div>
             <div className='cardText'>
             <h3>{el.name}</h3>
              <div className='locationText'>
                <div className='evaluation'>
                <p>{el.type}</p>
                <p>{el.star} Yıldız</p>
                </div>
             <div className='point'>
             <p>{el.point} Puan</p>
             <p><span><BulbOutlined /></span>{el.city}</p>
             </div>
              </div>
              <div className='filterText'>
                <span><BorderOuterOutlined /><p>{el.pool}</p></span>
                <span><BorderOuterOutlined /><p>{el.spa}</p></span>
              </div>
             </div>
             <div className='cardDetail'>
              <p>Fiyatlar için tarihleri girin!</p>
              <Button>Tarih  Seçin <RightOutlined /></Button>
              <a href='#'>Otel İncele <ArrowRightOutlined /></a>
             </div>
            </div>
               ))}
          </div>
          <div className='otelMap'>Haritalar</div>
          </div>
      ) : (
        <div className='otelsMain'>
          <h3>Popüler Oteller</h3>
        <div className='popülerOtelsCard'>
          {firstFiveItems.map((item, index) => (
            <div key={index} className='otelCards'>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <div className='locationText'>
                <p>{item.point}</p>
                <p><span><BulbOutlined /></span>{item.city}</p>
              </div>
              <div className='filterText'>
                <span><BorderOuterOutlined /><p>{item.pool}</p></span>
                <span><BorderOuterOutlined /><p>{item.spa}</p></span>
              </div>
            </div>
          ))}
        </div>
        <h3>En Yüksek Puanlı Oteller</h3>
        <div className='popülerOtelsCard'>
          {firstFiveItems.map((item, index) => (
            <div key={index} className='otelCards'>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <div className='locationText'>
                <p>{item.point}</p>
                <p><span><BulbOutlined /></span>{item.city}</p>
              </div>
              <div className='filterText'>
                <span><BorderOuterOutlined /><p>{item.pool}</p></span>
                <span><BorderOuterOutlined /><p>{item.spa}</p></span>
              </div>
            </div>
          ))}
        </div>
        </div>
      )}
      <div className='trivagoDownload'>
        <div className='downloadText'>
          <h4>trivago uygulamasını indirin</h4>
          <p>Mobil uygulamadan otel fiyatlarını kolayca karşılaştırın ve kazanç sağlayın.</p>
        </div>
        <div className='downloadImg'></div>
      </div>
    </div>
  );
}

export default Main;