import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="headerMenu">
        <div className="headerLogo">
          <a
            title="a global hotel search platform"
            aria-label="a global hotel search platform"
            href="/tr"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="32"
              viewBox="0 0 102 32"
              data-testid="header-hero-logo"
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
          </a>
        </div>
        <div className="headerLink">
          <ul>
            <li>
              <a href="#">
                <div className="favorite">
                  <div className="headerMenuIcon">
                    <span
                      class="leading-none inline-flex transform"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        class="pointer-events-none max-h-full max-w-full"
                      >
                        <path
                          d="M20.42 4.82A5.23 5.23 0 0016.5 3 5.37 5.37 0 0012 5.58 5.37 5.37 0 007.5 3a5.23 5.23 0 00-3.92 1.82A6.35 6.35 0 002 9.07v.28c0 5.42 7.25 10.18 9.47 11.51a1 1 0 001 0C14.74 19.53 22 14.77 22 9.35v-.22-.06a6.35 6.35 0 00-1.58-4.25zM21 9.18v.17c0 4.94-7.07 9.5-9 10.65-1.92-1.15-9-5.71-9-10.65v-.17a.41.41 0 000-.11A4.81 4.81 0 017.5 4a4.39 4.39 0 013.66 2.12L12 7.44l.84-1.32A4.39 4.39 0 0116.5 4 4.81 4.81 0 0121 9.07a.41.41 0 000 .11z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="headerMenuTitle">
                    <p>Favoriler</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="language">
                  <div className="headerMenuIcon">
                    <span
                      class="leading-none inline-flex transform"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        class="pointer-events-none max-h-full max-w-full"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M12 21.5V21v.5c-5.238 0-9.5-4.262-9.5-9.5H3h-.5c0-5.238 4.262-9.5 9.5-9.5V3v-.5c5.238 0 9.5 4.262 9.5 9.5H21h.5c0 5.238-4.262 9.5-9.5 9.5zm-6.389-3.898a8.5 8.5 0 005.09 2.798 15.327 15.327 0 01-2.592-3.943c-1.05.345-1.896.78-2.498 1.145zm10.25-1.078A15.355 15.355 0 0113.3 20.4a8.49 8.49 0 005.061-2.77 15.22 15.22 0 00-2.5-1.107zm-3.361-.655v3.926a14.328 14.328 0 002.394-3.557 12.39 12.39 0 00-2.394-.369zm-3.421.312a14.329 14.329 0 002.421 3.614v-3.938c-.876.026-1.687.148-2.421.324zm7.165-.586c.884.303 1.8.71 2.743 1.241a8.451 8.451 0 001.498-4.336h-3.542a11.783 11.783 0 01-.699 3.095zM3.514 12.5a8.454 8.454 0 001.48 4.308c.645-.4 1.576-.89 2.738-1.28a11.717 11.717 0 01-.676-3.028H3.515zm8.986 2.362c.88.044 1.813.181 2.788.442a10.8 10.8 0 00.652-2.804H12.5v2.362zM8.06 12.5c.086.952.31 1.873.63 2.745a12.903 12.903 0 012.81-.393V12.5H8.06zm8.918-1h3.507a8.443 8.443 0 00-1.484-4.315 13.87 13.87 0 01-2.55 1.207c.337 1.004.514 2.04.527 3.106v.002zm-4.478 0h3.478a9.088 9.088 0 00-.485-2.81c-.9.245-1.904.416-2.993.449V11.5zm-4.479 0H11.5V9.13a13.308 13.308 0 01-2.977-.487 9.094 9.094 0 00-.502 2.857zm-4.506 0H7.02v-.003c.015-1.084.197-2.138.547-3.158a16.469 16.469 0 01-2.555-1.175A8.444 8.444 0 003.515 11.5zM12.5 4.14v4.025c.946-.03 1.825-.173 2.63-.387-.581-1.27-1.459-2.485-2.63-3.638zM8.897 7.72c.909.25 1.778.387 2.603.432V4.14C10.347 5.275 9.48 6.47 8.897 7.72zm4.49-4.107c1.204 1.221 2.107 2.512 2.708 3.865.878-.313 1.645-.7 2.288-1.085a8.498 8.498 0 00-4.995-2.78zM5.64 6.368c.787.436 1.553.78 2.295 1.046.6-1.33 1.494-2.599 2.678-3.8A8.497 8.497 0 005.64 6.367z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="headerMenuTitle">
                    <p>TR-TL</p>
                  </div>
                </div>
              </a>{" "}
            </li>
            <li>
              <a href="#">
                <div className="login">
                  <div className="headerMenuIcon">
                    <span
                      class="leading-none inline-flex transform"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="pointer-events-none max-h-full max-w-full"
                      >
                        <path fill="transparent" d="M0 0h24v24H0z"></path>
                        <path
                          d="M17.129 19.038a5.363 5.363 0 00-1.895-2.87A5.274 5.274 0 0012 15.058c-1.17 0-2.307.39-3.234 1.11a5.362 5.362 0 00-1.895 2.87"
                          stroke="#0A1121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="transparent"
                        ></path>
                        <path
                          d="M21 12C21 0 3 0 3 12s18 12 18 0z"
                          stroke="#0A1121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="transparent"
                        ></path>
                        <path
                          d="M11.998 12.811c1.939 0 3.03-1.1 3.03-3.058 0-1.957-1.091-3.059-3.03-3.059-1.938 0-3.028 1.102-3.028 3.06 0 1.957 1.09 3.057 3.028 3.057z"
                          stroke="#0A1121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="transparent"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="headerMenuTitle">
                    <p>Giriş Yap</p>
                  </div>
                </div>{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">
                <div className="menu">
                  <div className="headerMenuIcon">
                    <span
                      class="leading-none inline-flex transform"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="pointer-events-none max-h-full max-w-full"
                      >
                        <path
                          d="M4 6h16M4 12h16M4 18h16"
                          stroke="currentColor"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="headerMenuTitle">
                    <p>Menü</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="headerLine">
        <hr></hr>
      </div>
    </div>
  );
};

export default Header;
