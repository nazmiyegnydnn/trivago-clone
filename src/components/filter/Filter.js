import React from 'react'
import "./Filter.scss";
import { StarOutlined } from '@ant-design/icons';
import { Button } from "antd";

const Filter = () => {
  return (
    <div className='filter'>
    <h4>Otel sınıfı</h4>
    <div className='starButton'>
        <Button><p>0-1</p><StarOutlined /></Button>
        <Button><p>2</p><StarOutlined /></Button>
        <Button><p>3</p><StarOutlined /></Button>
        <Button><p>4</p><StarOutlined /></Button>
        <Button><p>5</p><StarOutlined /></Button>
    </div>
    <h4>Popüler filtreler</h4>
    <div className='filtrechexbox'></div>
    </div>
  )
}

export default Filter