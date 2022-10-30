import { Form, Input, Row, Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shipping = () => {
  return (
    <div className="checkout__shipping">
      <div className="checkout__part-info">
        <div className="content__title">
          Khi nào bạn muốn nhận được đơn đặt hàng của mình?
        </div>
        <button className="big-button round-button-white">
          <span className="big__button-title">Dự kiến Tue, Nov 8 - Tue, Nov 15 </span>
          <span className="big__button-value">250,000₫</span>
        </button>

        <button className="big-button round-button-white">
          <span className="big__button-title">Dự kiến Tue, Nov 7 - Tue, Nov 30 </span>
          <span className="big__button-value">150,000₫</span>
        </button>
        <div className="checkout__redirect">
          <Link to="/register" className="round-button-white">
            Trở thành thành viên
          </Link>
          <Link to="/login" className="round-button-white">
            Đăng nhập
          </Link>
        </div>
      </div>

      <div className="checkout__part-info">
        <button className="round-button">Tiếp tục</button>
      </div>
    </div>
  );
};

export default Shipping;
