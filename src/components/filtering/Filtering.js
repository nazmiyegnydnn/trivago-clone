import React from 'react';
import "./Filtering.scss";
import { Button, Dropdown,Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';



const Filtering = () => {

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          ),
        },
      ];
      const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
  return (
         // Modallada deneyeceksin
    <div className='filteringBar'>
    <div className='filtering'>
        <p>Fiyat:gecelik</p>
        <Button className='filteringButton'><p>0*898</p><DownOutlined className='uparrow' /></Button>
        {/* <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        /> */}
    </div>
    <div className='filtering'>
        <p>Filtre</p>
        <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        }
      ]}
    />
    </div>
    <div className='filtering'>
        <p>Misafir Puanı</p>
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <Button className='filteringButton'><p>Tümü</p><DownOutlined className='uparrow' /></Button>
    </Dropdown>
    </div>
    <div className='filtering'>
        <p>Konaklama Tipi</p>
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <Button className='filteringButton'><p>Tümü</p><DownOutlined className='uparrow' /></Button>
    </Dropdown>
    </div>
    <div className='filtering'>
        <p>Konum</p>
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <Button className='filteringButton'><p>Şehir Merkezi</p><DownOutlined className='uparrow' /></Button>
    </Dropdown>
    </div>
    </div>
  )
}

export default Filtering