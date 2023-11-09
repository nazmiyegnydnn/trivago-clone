import React from "react";
import "./SearchBar.scss";
import { Input, DatePicker, Space, Button, Dropdown } from "antd";

const SearchBar = () => {
  const { RangePicker } = DatePicker;
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
        <p>Yetişkin</p>
        <div className="increase">
        <Button>-</Button>
        <Input placeholder="1"/>
        <Button>+</Button>
        </div>
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Çocuklar
          <div className="increase">
          <Button>-</Button>
          <Input placeholder="1"/>
        <Button>+</Button>
        </div>
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Oda
          <div className="increase">
          <Button>-</Button>
          <Input placeholder="1"/>
        <Button>+</Button>
        </div>
        </a>
      ),
    },
  ];

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
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow={{
            pointAtCenter: true,
          }}
          className="personChoose"
        >
          <Button className="roomButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="pointer-events-none max-h-full max-w-full"
            >
              <path
                d="M21 12a3.1 3.1 0 00-1-2.31V6a1 1 0 00-1-1H5a1 1 0 00-1 1v3.69A3.1 3.1 0 003 12a1 1 0 00-1 1v4a2 2 0 002 2h16a2 2 0 002-2v-4a1 1 0 00-1-1zm-7.76-1a1.72 1.72 0 011.51-1h3.5a1.5 1.5 0 01.75.2 1.87 1.87 0 01.91 1.21A1.87 1.87 0 0120 12h-7a2.2 2.2 0 01.24-1zM5 6h14v3.12a2.36 2.36 0 00-.75-.12h-3.5a2.78 2.78 0 00-2.59 2 3.27 3.27 0 00-.16 1 3.27 3.27 0 00-.16-1 2.78 2.78 0 00-2.59-2h-3.5a2.36 2.36 0 00-.75.12zm-.91 5.41A1.87 1.87 0 015 10.2a1.5 1.5 0 01.75-.2h3.5a1.72 1.72 0 011.51 1 2.2 2.2 0 01.24 1H4a1.87 1.87 0 01.09-.59zM21 17a1 1 0 01-1 1H4a1 1 0 01-1-1v-4h18z"
                fill="currentColor"
              ></path>
            </svg>
            Misafir ve Odalar
          </Button>
        </Dropdown>
      </div>
      <div className="searchButton">
        <button>ARA</button>
      </div>
    </div>
  );
};

export default SearchBar;
