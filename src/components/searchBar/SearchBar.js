import React from 'react';
import "./SearchBar.scss";
import { Input, DatePicker, Space , Button } from "antd";
import ModalFilter from "../modalFilter/ModalFilter"
import { DownOutlined } from '@ant-design/icons';
import GuestFilter from '../guestFilter/GuestFilter';

const SearchBar = () => {
  const { RangePicker } = DatePicker;

  return (
    <div className="searchBar">
      <div className="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="pointer-events-none max-h-full max-w-full"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          >
            <path
              d="M10 3a7 7 0 107 7 7 7 0 00-7-7zM21 21l-6-6"
              vector-effect="non-scaling-stroke"
            ></path>
          </g>
        </svg>
        <Input placeholder="Gidilecek Yer" />
      </div>
      <div className="searchDate">
        <Space direction="vertical" size={12}>
          <RangePicker placeholder={["Giriş", "Çıkış"]} />
        </Space>
      </div>
      <div className="searchRoom">
        <ModalFilter 
          width={"400px"}
          height={"300px"}
          top={"35px"}
          icon={<DownOutlined/>}
          >
            <GuestFilter/>
          </ModalFilter>
      </div>
      <div className="searchButton">
      <Button>ARA</Button>
      </div>
    </div>
  );
};

export default SearchBar;
