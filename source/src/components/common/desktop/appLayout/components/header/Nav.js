import React from "react";
import logo from "../../../../../../assets/svg/logo-500.svg";
import {Link} from "react-router-dom"
const Nav = () => {
  window.addEventListener("scroll",function(){
    const nav= document.querySelector(".menu")
    if(this.scrollY >= 36) nav.classList.add("off-nav")
      else nav.classList.remove("off-nav")
})
  return (
    <nav className="nav wrapper">
      <Link to="/">
        <img src={logo} alt="shop" className="nav__logo" />
      </Link>

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
        <Link to='/cart'>
        <i class='bx bx-shopping-bag nav__icon' value={3}></i>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
