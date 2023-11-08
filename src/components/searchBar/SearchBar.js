import React from "react";
import "./SearchBar.scss";
import { Input ,Calendar} from "antd";

const SearchBar = () => {
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
      <div className="entranceDate">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full"><g fill="currentColor"><path d="M19 5h-1a1 1 0 00-2 0H8a1 1 0 00-2 0H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1V9h16zm0-10H4V7a1 1 0 011-1h14a1 1 0 011 1z"></path><circle cx="7.5" cy="12.5" r="1.5"></circle><path d="M19 5h-1a1 1 0 00-2 0H8a1 1 0 00-2 0H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1V9h16zm0-10H4V7a1 1 0 011-1h14a1 1 0 011 1z"></path><circle cx="7.5" cy="12.5" r="1.5"></circle></g></svg>
     <p>Giriş</p>
      </div>
      <div className="exitDate">
     <p>Çıkış</p>
      </div>
      <div className="searchRoom">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full"><path d="M21 12a3.1 3.1 0 00-1-2.31V6a1 1 0 00-1-1H5a1 1 0 00-1 1v3.69A3.1 3.1 0 003 12a1 1 0 00-1 1v4a2 2 0 002 2h16a2 2 0 002-2v-4a1 1 0 00-1-1zm-7.76-1a1.72 1.72 0 011.51-1h3.5a1.5 1.5 0 01.75.2 1.87 1.87 0 01.91 1.21A1.87 1.87 0 0120 12h-7a2.2 2.2 0 01.24-1zM5 6h14v3.12a2.36 2.36 0 00-.75-.12h-3.5a2.78 2.78 0 00-2.59 2 3.27 3.27 0 00-.16 1 3.27 3.27 0 00-.16-1 2.78 2.78 0 00-2.59-2h-3.5a2.36 2.36 0 00-.75.12zm-.91 5.41A1.87 1.87 0 015 10.2a1.5 1.5 0 01.75-.2h3.5a1.72 1.72 0 011.51 1 2.2 2.2 0 01.24 1H4a1.87 1.87 0 01.09-.59zM21 17a1 1 0 01-1 1H4a1 1 0 01-1-1v-4h18z" fill="currentColor"></path></svg>
        <p>Misafir ve Odalar</p>
      </div>
      <div className="searchButton">
        <button>ARA</button>
      </div>
    </div>
  );
};

export default SearchBar;
