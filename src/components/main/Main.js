import React from 'react'
import "./Main.scss";
import Otel from "../../images/Otel.jpg"
import { BulbOutlined ,BorderOuterOutlined} from '@ant-design/icons';

const Main = () => {
  return (
    <div className='main'>
     <h3>Bu en yüksek puanlı otellere bir göz atın</h3>
     <div className='popülerOtelsCard'>
        <div className='otelCards'>
            <img src={Otel}/>
            <h3>Lara Barut Collection</h3>
            <div className='locationText'>
                <p>Mükemmel</p>
                <p><span><BulbOutlined /></span>Konum</p>
            </div>
            <div className='filterText'>
                <span><BorderOuterOutlined /><p>Havuz</p></span>
                <span><BorderOuterOutlined /><p>Spa</p></span>
            </div>
        </div>
        <div className='otelCards'>
            <img src={Otel}/>
            <h3>Lara Barut Collection</h3>
            <div className='locationText'>
                <p>Mükemmel</p>
                <p><span><BulbOutlined /></span>Konum</p>
            </div>
            <div className='filterText'>
                <span><BorderOuterOutlined /><p>Havuz</p></span>
                <span><BorderOuterOutlined /><p>Spa</p></span>
            </div>
        </div>
        <div className='otelCards'>
            <img src={Otel}/>
            <h3>Lara Barut Collection</h3>
            <div className='locationText'>
                <p>Mükemmel</p>
                <p><span><BulbOutlined /></span>Konum</p>
            </div>
            <div className='filterText'>
                <span><BorderOuterOutlined /><p>Havuz</p></span>
                <span><BorderOuterOutlined /><p>Spa</p></span>
            </div>
        </div>
     </div>
     <h3>Popüler aramalar</h3>
     <div className='popülerOtelsCard'>
        <div className='otelCards'>
            <img src={Otel}/>
            <h3>Lara Barut Collection</h3>
            <div className='locationText'>
                <p>Mükemmel</p>
                <p><span><BulbOutlined /></span>Konum</p>
            </div>
            <div className='filterText'>
                <span><BorderOuterOutlined /><p>Havuz</p></span>
                <span><BorderOuterOutlined /><p>Spa</p></span>
            </div>
        </div>
        <div className='otelCards'>
            <img src={Otel}/>
            <h3>Lara Barut Collection</h3>
            <div className='locationText'>
                <p>Mükemmel</p>
                <p><span><BulbOutlined /></span>Konum</p>
            </div>
            <div className='filterText'>
                <span><BorderOuterOutlined /><p>Havuz</p></span>
                <span><BorderOuterOutlined /><p>Spa</p></span>
            </div>
        </div>
        <div className='otelCards'>
            <img src={Otel}/>
            <h3>Lara Barut Collection</h3>
            <div className='locationText'>
                <p>Mükemmel</p>
                <p><span><BulbOutlined /></span>Konum</p>
            </div>
            <div className='filterText'>
                <span><BorderOuterOutlined /><p>Havuz</p></span>
                <span><BorderOuterOutlined /><p>Spa</p></span>
            </div>
        </div>
     </div>
     <div className='trivagoDownload'>
        <div className='downloadText'>
          <h4>trivago uygulamasını indirin</h4>
          <p>Mobil uygulamadan otel fiyatlarını kolayca karşılaştırın ve kazanç sağlayın.</p>
        </div>
        <div className='downloadImg'></div>
     </div>
    </div>
  )
}

export default Main