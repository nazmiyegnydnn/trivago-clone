import React from "react";
import "./Footer.scss";
import { Button, Input, Select } from "antd";

const Footer = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerLogo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="77"
            height="24.15686274509804"
            viewBox="0 0 102 32"
          >
            <path
              class="Logo_default_svg__logo-svg-path"
              d="M33.706 6.989h5.441l4.133 11.149h.066l3.83-11.149h5.071L45.8 23.377h-5.34"
              fill="#FC9E15"
            ></path>
            <path
              class="Logo_default_svg__logo-svg-path"
              d="M13.971 11.018H9V16.5c0 .93.082 2.119.959 2.655a4.649 4.649 0 002.9.283 2.242 2.242 0 001.107-.386v4.2a10.114 10.114 0 01-1.938.4c-3.556.359-8.54-.253-8.54-4.838v-7.8H0V6.988h3.492V2.153H9v4.836h4.97v4.03zm14.1-4.03h4.97v16.389h-4.97V6.989zm-.2-4.311a2.676 2.676 0 115.351 0 2.677 2.677 0 01-5.353 0"
              fill="#1391D2"
            ></path>
            <path
              class="Logo_default_svg__logo-svg-path"
              d="M90.124 15.195c0 2.215 1.289 4.13 3.648 4.13s3.647-1.915 3.647-4.131-1.287-4.133-3.647-4.133-3.647 1.917-3.648 4.134m-4.556 0a8.224 8.224 0 0114.711-5.43 9.491 9.491 0 01.687 9.766 8.214 8.214 0 01-15.4-4.336M80.24 6.973v2.2h-.076a3.041 3.041 0 00-.574-.613c-3.254-2.8-8.812-2.238-10.915 1.679a11.506 11.506 0 00-.924 6.812c.283 2.077 1.05 4.275 2.879 5.478a7.739 7.739 0 006.936.71 4.8 4.8 0 002.075-1.572h.059v1.588a3.9 3.9 0 01-.984 2.881c-1.449 1.493-4.218 1.4-6.079.894a9.223 9.223 0 01-2.914-1.307l-2.451 3.6a11.307 11.307 0 003.906 1.9c3.583.949 8.543.928 11.312-1.921 1.561-1.606 2.2-3.96 2.2-7.06V6.971h-4.448zM78.984 18.2a3.707 3.707 0 01-5.4 0 5.013 5.013 0 010-6 3.707 3.707 0 015.4 0 5.011 5.011 0 010 6c-.639.763.641-.763 0 0z"
              fill="#E3403D"
            ></path>
            <path
              class="Logo_default_svg__logo-svg-path"
              d="M15.314 6.989h5.105v2.686h.051A5.715 5.715 0 0122.384 7.4a6.338 6.338 0 014.482-.6v4.6c-1.029-.278-3.2-.715-4.717.211-.96.586-1.731 1.288-1.731 4.929v6.839h-5.105V6.989z"
              fill="#1391D2"
            ></path>
            <path
              class="Logo_default_svg__logo-svg-path"
              d="M56.992 16.844c-1 .62-1.683 1.829-.763 2.775.9.922 2.522.829 3.632.441a2.98 2.98 0 002.2-2.784v-1.018c.017 0-3.794-.208-5.069.585zm5.07 4.518h-.093a5.079 5.079 0 01-2.232 1.852c-3.563 1.464-8.748-.019-8.75-4.492 0-4.655 5.07-5.606 8.784-5.712a89.25 89.25 0 012.267-.034 2.62 2.62 0 00-.957-2.132 4.243 4.243 0 00-4.535-.268A6.2 6.2 0 0054.716 12l-2.688-2.752a9.255 9.255 0 013.292-1.966 11.844 11.844 0 017.044-.27 5.625 5.625 0 013.952 4.437 17.479 17.479 0 01.314 3.61v8.317h-4.567v-2.014z"
              fill="#FC9E15"
            ></path>
          </svg>
        </div>
        <div className="footerIcon">
          <span
            class="leading-none inline-flex h-full w-full transform"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="pointer-events-none max-h-full max-w-full h-full w-full"
            >
              <path
                d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3 5.62h-1.52a.65.65 0 00-.61.54v1.56H15c-.09 1.19-.26 2.28-.26 2.28h-1.88v6.75h-2.8V12H8.7V9.72h1.36V7.86c0-.33-.07-2.61 2.87-2.61H15z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span
            class="leading-none inline-flex h-full w-full transform"
            aria-hidden="true"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="pointer-events-none max-h-full max-w-full h-full w-full"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 12.101c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10zm15.29-5.5h-1.84l-3.033 3.514-2.62-3.514H6l4.534 6.016-4.3 4.984h1.844l3.317-3.845 2.902 3.845H18l-4.73-6.34 4.02-4.66zm-1.467 9.884h-1.02L8.146 7.66h1.095l6.582 8.826z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span
            class="leading-none inline-flex h-full w-full transform"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="pointer-events-none max-h-full max-w-full h-full w-full"
            >
              <g fill="currentColor">
                <circle cx="12" cy="12" r="2.25"></circle>
                <path d="M17.49 9.27A3.85 3.85 0 0017.26 8a2 2 0 00-.51-.77 2 2 0 00-.75-.49 3.85 3.85 0 00-1.25-.23H9.29A3.85 3.85 0 008 6.74a2 2 0 00-.77.51 2 2 0 00-.49.75 3.85 3.85 0 00-.23 1.25v5.46A3.85 3.85 0 006.74 16a2 2 0 00.51.77 2 2 0 00.77.51 3.85 3.85 0 001.25.23h5.46a3.85 3.85 0 001.27-.25A2.32 2.32 0 0017.26 16a3.85 3.85 0 00.23-1.25v-2.73c0-1.8.03-2.02 0-2.75zM12 15.46A3.46 3.46 0 1115.46 12 3.46 3.46 0 0112 15.46zm3.6-6.25a.81.81 0 11.81-.81.81.81 0 01-.81.81z"></path>
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm6.7 12.78a4.82 4.82 0 01-.31 1.64 3.49 3.49 0 01-2 2 4.82 4.82 0 01-1.64.31c-.72 0-.95.05-2.78.05s-2.06 0-2.78-.05a4.82 4.82 0 01-1.64-.31 3.19 3.19 0 01-1.19-.78 3.19 3.19 0 01-.78-1.19 4.82 4.82 0 01-.31-1.64v-2.78-2.78a4.82 4.82 0 01.31-1.64 3.19 3.19 0 01.78-1.19 3.19 3.19 0 011.19-.78 5 5 0 011.64-.32h5.56a5 5 0 011.64.32 3.19 3.19 0 011.19.78 3.19 3.19 0 01.78 1.19 4.82 4.82 0 01.31 1.64c0 .72.05.95.05 2.78s.02 2.03-.02 2.75z"></path>
              </g>
            </svg>
          </span>
          <span
            class="leading-none inline-flex h-full w-full transform"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="pointer-events-none max-h-full max-w-full h-full w-full"
            >
              <g fill="currentColor">
                <circle cx="12" cy="12" r="2.25"></circle>
                <path d="M17.49 9.27A3.85 3.85 0 0017.26 8a2 2 0 00-.51-.77 2 2 0 00-.75-.49 3.85 3.85 0 00-1.25-.23H9.29A3.85 3.85 0 008 6.74a2 2 0 00-.77.51 2 2 0 00-.49.75 3.85 3.85 0 00-.23 1.25v5.46A3.85 3.85 0 006.74 16a2 2 0 00.51.77 2 2 0 00.77.51 3.85 3.85 0 001.25.23h5.46a3.85 3.85 0 001.27-.25A2.32 2.32 0 0017.26 16a3.85 3.85 0 00.23-1.25v-2.73c0-1.8.03-2.02 0-2.75zM12 15.46A3.46 3.46 0 1115.46 12 3.46 3.46 0 0112 15.46zm3.6-6.25a.81.81 0 11.81-.81.81.81 0 01-.81.81z"></path>
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm6.7 12.78a4.82 4.82 0 01-.31 1.64 3.49 3.49 0 01-2 2 4.82 4.82 0 01-1.64.31c-.72 0-.95.05-2.78.05s-2.06 0-2.78-.05a4.82 4.82 0 01-1.64-.31 3.19 3.19 0 01-1.19-.78 3.19 3.19 0 01-.78-1.19 4.82 4.82 0 01-.31-1.64v-2.78-2.78a4.82 4.82 0 01.31-1.64 3.19 3.19 0 01.78-1.19 3.19 3.19 0 011.19-.78 5 5 0 011.64-.32h5.56a5 5 0 011.64.32 3.19 3.19 0 011.19.78 3.19 3.19 0 01.78 1.19 4.82 4.82 0 01.31 1.64c0 .72.05.95.05 2.78s.02 2.03-.02 2.75z"></path>
              </g>
            </svg>
          </span>
          <span
            class="leading-none inline-flex h-full w-full transform"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="pointer-events-none max-h-full max-w-full h-full w-full"
            >
              <path
                d="M12 2a10 10 0 1010 10A10 10 0 0012 2zM8.73 17.4H6.15V9.71h2.58zM7.44 8.66A1.33 1.33 0 117.46 6a1.33 1.33 0 110 2.66zM18 17.4h-2.57v-4.12c0-1-.37-1.74-1.31-1.74a1.39 1.39 0 00-1.31.94 1.66 1.66 0 00-.09.62v4.3h-2.57V9.71h2.57v1.09A2.54 2.54 0 0115 9.53c1.69 0 3 1.09 3 3.46z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="footerSelect">
        <Select
          defaultValue="Türkiye"
          className="select"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
          ]}
        />
      </div>
      <div className="footerText">
        <div className="textLeft">
          <div className="aboutLinks">
            <ul>
              <li>Şirket</li>
              <li>İş İlanları</li>
              <li>Medya</li>
              <li>Yatırımcılarla İlişkiler</li>
              <li>Mobil - İstediğiniz yerden arama yapın</li>
              <li>trivago Business Studio</li>
            </ul>
          </div>
          <div className="helpLinks">
            <ul>
              <li>Şirket</li>
              <li>İş İlanları</li>
              <li>Medya</li>
              <li>Yatırımcılarla İlişkiler</li>
              <li>Mobil - İstediğiniz yerden arama yapın</li>
              <li>trivago Business Studio</li>
            </ul>
          </div>
        </div>
        <div className="textRight">
          <h4>
            Haber bültenimize abone olun ve bir sonraki konaklamanıza ilham
            verecek yerleri keşfedin.
          </h4>
          <div className="footerSignUp">
            <Input placeholder="E-posta  Adresi" />
            <Button>Üye ol</Button>
          </div>
          <p>
            trivago N.V., Kesselstraße 5 – 7, 40221 Düsseldorf, Almanya Telif
            hakkı 2023 trivago | Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
