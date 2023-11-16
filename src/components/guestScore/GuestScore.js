import React from 'react'
import "./GuestScore.scss";
import { Button } from "antd";


const GuestScore = () => {

  return (
    <div className='guestScore'>
     <div className='point'>
        <ul>
            <li><Button><span>8,5+</span></Button><p>Mükkemmel</p></li>
            <li><Button><span>8</span></Button><p>Çok iyi</p></li>
            <li><Button><span>7,5</span></Button><p>İyi</p></li>
            <li><Button><span>7</span></Button><p>Fena değil</p></li>
        </ul>
     </div>
    </div>
  )
}

export default GuestScore