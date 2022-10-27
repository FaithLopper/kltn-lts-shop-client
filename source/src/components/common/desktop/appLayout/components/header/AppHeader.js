import React from "react";

const AppHeader = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="menu wrapper">
          <a href="index.html" className="nav__logo">
            Smith
          </a>
          <div className="nav-menu">
            <ul className="nav-list grid">
              <li className="nav-item">
                <a href="" className="nav__link">
                  Tìm cửa hàng
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="nav wrapper">Nav</nav>
        <div className="hot-new wrapper">Promotion Slider</div>
      </div>
    </header>
  );
};

export default AppHeader;
