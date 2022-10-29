import React, { useState } from "react";
import logo from "../../../../../../assets/svg/logo-500.svg";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Nav = () => {
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".menu");
    if (this.scrollY >= 36) nav.classList.add("off-nav");
    else nav.classList.remove("off-nav");
  });
  const product = {
    image:
      "https://secure-images.nike.com/is/image/DotCom/DQ7658_300?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg",
    name: `Nike Air Force 1 '07 LV8`,
    productCategory: `Men's Shoes`,
    description: "Malachite/Sail/White/Blue Jay",
    variants: { size: 40, quantity: 1 },
    price: `3239000`,
  };
  const [show, setShow]= useState(false)
  return (
    <>
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
          {/* <Link to="/cart">
            <i class="bx bx-shopping-bag nav__icon" value={3}></i>
          </Link> */}
            <i class="bx bx-shopping-bag nav__icon" onClick={()=>setShow(!show)} value={3}></i>
        </div>
      </nav>

      <div className={!show ? "cart__modal": "cart__modal active__modal-cart"}>
        <div className="card__modal-header">
          <span>
            <CheckCircleFilled style={{ color: "green" }} /> Đã thêm vào giỏ
            hàng
          </span>
          <i class="uil uil-multiply cart__modal-icon"></i>
        </div>
        <div className="cart__product grid">
          <img src={product.image} alt="" className="cart__item-image" />
          <div className="cart__item-info">
            <div className="cart__item-name">{product.name}</div>
            <div className="cart__item-category">{product.productCategory}</div>
            <div className="cart__item-description">{product.description}</div>
            <div className="cart__item-variants">
              <span className="cart__item-size">
                Size {product.variants.size}
              </span>
            </div>
          </div>
        </div>
        <div className="card__modal-action">
          <Link to="/cart" className="round-button">
            Giỏ hàng
          </Link>
          <Link to="/checkout" className="round-button">
            Thanh toán
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
