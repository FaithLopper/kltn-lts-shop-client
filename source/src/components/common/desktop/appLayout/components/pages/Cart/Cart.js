import React from "react";
import { Select } from "antd";
import {
  QuestionCircleFilled
} from '@ant-design/icons';
import Utils from '../../../../../../../utils'
const product = [
  {
    image:
      "https://secure-images.nike.com/is/image/DotCom/DQ7658_300?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg",
    name: `Nike Air Force 1 '07 LV8`,
    productCategory: `Men's Shoes`,
    description: "Malachite/Sail/White/Blue Jay",
    variants: { size: 40, quantity: 1 },
    price: `3239000`,
  },
  {
    image:
      "https://secure-images.nike.com/is/image/DotCom/DQ7658_100?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg",
    name: `Nike Air Max Flyknit Racer`,
    productCategory: `Men's Shoes`,
    description: "Malachite/Sail/White/Blue Jay",
    variants: { size: 40, quantity: 1 },
    price: `3239000`,
  },
  {
    image:
      "https://secure-images.nike.com/is/image/DotCom/BQ5453_100?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg",
    name: `Nike Air Force 1 '07 LV8`,
    productCategory: `Men's Shoes`,
    description: "Malachite/Sail/White/Blue Jay",
    variants: { size: 40, quantity: 1 },
    price: `4699000`,
  },
  {
    image:
      "https://secure-images.nike.com/is/image/DotCom/DJ6106_300?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg",
    name: `Nike Court Borough Low 2`,
    productCategory: `Men's Shoes`,
    description: "Malachite/Sail/White/Blue Jay",
    variants: { size: 40, quantity: 1 },
    price: `3239000`,
  },
];

const Cart = () => {
  return (
    <section className="cart section">
      <div className="cart__container page-wrapper grid">
        <div className="cart__bag">
          <div className="content__title">Giỏ hàng</div>
          <div className="cart__list">
            {product.map(
              ({
                image,
                name,
                productCategory,
                description,
                variants,
                price,
              }) => (
                <>
                  <div className="cart__item grid">
                    <img src={image} alt="" className="cart__item-image" />
                    <div className="cart__item-info">
                      <div className="cart__item-name">{name}</div>
                      <div className="cart__item-category">
                        {productCategory}
                      </div>
                      <div className="cart__item-description">
                        {description}
                      </div>
                      <div className="cart__item-variants">
                        <span className="cart__item-size">
                          Size {variants.size}
                        </span>
                        <span className="cart__item-quantity">
                          Số lượng
                          <select name="quantity" className="cart__quantity-select">
                            {[...Array(10)].map((item, _index) => (
                              <option value={_index +1}> {_index +1}</option>
                            ))}
                          </select>
                        </span>
                      </div>
                      <div className="cart__item-action">
                      <i class="fa fa-trash-o cart__icon" aria-hidden="true"></i>
                    </div>
                    </div>
                    <div className="cart__item-price">{Utils.formatMoney(price || 0)}</div>
                 
                  </div>
                </>
              )
            )}
          </div>
        </div>
        <div className="cart__summary">
          <div className="content__title">Tổng đơn hàng</div>
          <div className="cart__summary-content">
            <div className="cart__summary-item grid">
              <div className="summary__name">Giá trị   <QuestionCircleFilled style={{fontSize:"14px",cursor:"pointer"}}/></div>
              <div className="summary__price">12,955,000₫</div>
            </div>

            <div className="cart__summary-item grid">
              <div className="summary__name">Chi phí vận chuyển</div>
              <div className="summary__price">Miễn phí</div>
            </div>
          </div>
          <div className="cart__summary-content">
            <div className="cart__summary-item grid">
              <div className="summary__name">Tổng</div>
              <div className="summary__price">12,955,000₫</div>
            </div>
          </div>
          <div className="cart__summary-button">
            <button className="round-button">Thanh toán</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
