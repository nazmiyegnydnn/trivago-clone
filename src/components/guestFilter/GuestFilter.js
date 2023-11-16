import React from 'react'
import "./GuestFilter.scss";
import { Button, Input } from "antd";
import { PlusOutlined ,MinusOutlined} from '@ant-design/icons';



const GuestFilter = () => {
  return (
    <div className='guestFilter'>
    <div className='guest'>
    <div className='guestText'><p>Yetişkin</p></div>
     <div className='guestButtons'>
       <ul>
         <li><Button><MinusOutlined /></Button></li>
         <li><Input placeholder='0'/></li>
         <li><Button><PlusOutlined /></Button></li>
       </ul>
     </div>
     </div>
     <div className='guest'>
    <div className='guestText'><p>Çocuk</p></div>
     <div className='guestButtons'>
       <ul>
         <li><Button><MinusOutlined /></Button></li>
         <li><Input placeholder='0'/></li>
         <li><Button><PlusOutlined /></Button></li>
       </ul>
     </div>
     </div>
     <div className='guest'>
    <div className='guestText'><p>Oda</p></div>
     <div className='guestButtons'>
       <ul>
         <li><Button><MinusOutlined /></Button></li>
         <li><Input placeholder='0'/></li>
         <li><Button><PlusOutlined /></Button></li>
       </ul>
     </div>
     </div>
    </div>

  )
}

export default GuestFilter