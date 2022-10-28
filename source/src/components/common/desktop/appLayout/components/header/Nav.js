import React from "react";
import logo from "../../../../../../assets/svg/logo-500.svg";
const Nav = () => {
  return (
    <nav className="nav wrapper">
      <a href="index.html">
        <img src={logo} alt="shop" className="nav__logo" />
      </a>

      <ul className="nav__list grid">
        <li className="nav__item">Nam</li>
        <li className="nav__item">Nữ</li>
        <li className="nav__item">Giày</li>
        <li className="nav__item">Dép</li>
        <li className="nav__item">Sale</li>
        <li className="nav__item">Tin tức</li>
      </ul>

      <div className="nav__action">
        <div className="nav__search">
         
          <i class="uil uil-search nav__search-icon"></i>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="nav__search-input"
          />
        </div>
        <i class='bx bx-shopping-bag nav__icon'></i>
      </div>
    </nav>
  );
};

export default Nav;
