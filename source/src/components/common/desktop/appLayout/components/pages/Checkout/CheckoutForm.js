import { QuestionCircleFilled } from "@ant-design/icons";
import { Form } from "antd";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Utils from "../../../../../../../utils";
import Delivery from "./Delivery";
import Shipping from "./Shipping";

const CheckoutForm = () => {
  const deliveryRef= useRef()
  const [active, setActive] = useState({
    delivery: { active: true, isEdited: false },
    shipping: { active: false, isEdited: false },
    billing: { active: false, isEdited: false },
    payment: { active: false, isEdited: false },
  });

  const setActivePart = (type) => {
    switch (type) {
      case "delivery":
        setActive({
          delivery: { ...active.delivery, active: true },
        });
        break;
      case "shipping":
        setActive({
          shipping: { ...active.shipping, active: true },
        });
        break;

      case "billing":
        setActive({
          billing: { ...active.billing, active: true },
        });
        break;

      case "payment":
        setActive({
          payment: { ...active.payment, active: true },
        });
        break;

      default:
        break;
      // code block
    }
  };

  const setEditedPart = (type) => {
    switch (type) {
      case "delivery":
        setActive({
          delivery: { ...active.delivery, isEdited: true },
        });
        break;
      case "shipping":
        setActive({
          shipping: { ...active.shipping, isEdited: true },
        });
        break;

      case "billing":
        setActive({
          billing: { ...active.billing, isEdited: true },
        });
        break;

      case "payment":
        setActive({
          payment: { ...active.payment, isEdited: true },
        });
        break;

      default:
        break;
      // code block
    }
  };

  return (
    <section className="checkout section">
      <div className="checkout__container page-wrapper grid">
        <div className="checkout__part">
              <div className="checkout__content">
              <Form  className="checkout__form">
                    <Delivery formRef={deliveryRef}/>
                    <Shipping/>
              </Form>
              </div>
              <div className="checkout__process">

              </div>
        </div>
        <div className="checkout__summary">
          <div className="content__title">Tóm tắt đơn hàng</div>
          <div className="checkout__summary-content">
            <div className="checkout__summary-item grid">
              <div className="summary__name">
                Giá trị{" "}
                <QuestionCircleFilled
                  style={{ fontSize: "14px", cursor: "pointer" }}
                />
              </div>
              <div className="summary__price">12,955,000₫</div>
            </div>

            <div className="checkout__summary-item grid">
              <div className="summary__name">Chi phí vận chuyển</div>
              <div className="summary__price">Miễn phí</div>
            </div>
          </div>
          <div className="checkout__summary-content">
            <div className="checkout__summary-item grid">
              <div className="summary__name">Tổng </div>
              <div className="summary__price">12,955,000₫</div>
            </div>
          </div>
          <div className="checkout__summary-button">
            <Link to="/checkout" className="round-button">
              Thanh toán
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
