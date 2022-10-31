import { QuestionCircleFilled } from "@ant-design/icons";
import { Button, Form } from "antd";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Utils from "../../../../../../../utils";
import Billing from "./Billing";
import Delivery from "./Delivery";
import Shipping from "./Shipping";

const data = [
  {
    image:
      "https://secure-images.nike.com/is/image/DotCom/DH0956_001?v=a0a21517955e78b0844bdf3dfdde8b87",
    name: `Nike Air Force 1 '07 LV8`,
    productCategory: `Men's Shoes`,
    description: "Malachite/Sail/White/Blue Jay",
    variants: { size: 40, quantity: 1 },
    price: 3239000,
    totalPrice: 3239000,
    quantity: 1,
  },
  {
    image:
      "https://secure-images.nike.com/is/image/DotCom/DJ9946_100?v=a0a21517955e78b0844bdf3dfdde8b87",
    name: `Nike Air Max Flyknit Racer`,
    productCategory: `Men's Shoes`,
    description: "Malachite/Sail/White/Blue Jay",
    variants: { size: 40, quantity: 1 },
    price: 1239000,
    totalPrice: 1239000,
    quantity: 1,
  },
  {
    image:
      "	https://secure-images.nike.com/is/image/DotCom/DO9387_001?v=a0a21517955e78b0844bdf3dfdde8b87",
    name: `Nike Air Force 1 '07 LV8`,
    productCategory: `Men's Shoes`,
    description: "Malachite/Sail/White/Blue Jay",
    variants: { size: 40, quantity: 1 },
    price: 2699000,
    totalPrice: 2699000,
    quantity: 1,
  },
  {
    image:
      "	https://secure-images.nike.com/is/image/DotCom/DO9387_001?v=a0a21517955e78b0844bdf3dfdde8b87",
    name: `Nike Court Borough Low 2`,
    productCategory: `Men's Shoes`,
    description: "Malachite/Sail/White/Blue Jay",
    variants: { size: 40, quantity: 1 },
    price: 4239000,
    totalPrice: 4239000,
    quantity: 1,
  },
  {
    image:
      "	https://secure-images.nike.com/is/image/DotCom/DO9387_001?v=a0a21517955e78b0844bdf3dfdde8b87",
    name: `Nike Air Force 1 '07 LV8`,
    productCategory: `Men's Shoes`,
    description: "Malachite/Sail/White/Blue Jay",
    variants: { size: 40, quantity: 1 },
    price: 2699000,
    totalPrice: 2699000,
    quantity: 1,
  },
  {
    image:
      "	https://secure-images.nike.com/is/image/DotCom/DO9387_001?v=a0a21517955e78b0844bdf3dfdde8b87",
    name: `Nike Court Borough Low 2`,
    productCategory: `Men's Shoes`,
    description: "Malachite/Sail/White/Blue Jay",
    variants: { size: 40, quantity: 1 },
    price: 4239000,
    totalPrice: 4239000,
    quantity: 1,
  },
];

const CheckoutForm = () => {
  const deliveryRef = useRef();
  const shippingRef = useRef();
  const billingRef = useRef();

  const [active, setActive] = useState({
    delivery: { active: true, isEdited: false },
    shipping: { active: false, isEdited: false },
    billing: { active: false, isEdited: false },
    payment: { active: false, isEdited: false },
  });

  const [form, setForm] = useState({
    delivery: {},
    shipping: {},
    billing: {},
    payment: {},
  });
  const [product, setProduct] = useState(data);

  const onNext = (current) => {
    switch (current) {
      case 0:
        setActive({
          ...active,
          delivery: { ...active.delivery, active: false },
          shipping: { ...active.shipping, active: true },
        });
        break;
      case 1:
        setActive({
          ...active,
          shipping: { ...active.shipping, active: false },
          billing: { ...active.billing, active: true },
        });
        break;
      case 2:
        setActive({
          ...active,
          billing: { ...active.billing, active: false },
          payment: { ...active.payment, active: true },
        });
        break;
      default:
        break;
    }
  };

  const setFormData = (data, type) => {
    switch (type) {
      case 0:
        setForm({
          ...form,
          delivery:data
        })
        break;
      case 1:
        setForm({
          ...form,
          shipping:data
        })
        break;
      case 2:
        setForm({
          ...form,
          billing:data
        })
        break;
      default:
        break;
    }
  };
  console.log(form)
  return (
    <section className="checkout section">
      <div className="checkout__container page-wrapper grid">
        <div className="checkout__part">
          <div className="checkout__content">
            {active.delivery.active && (
              <Delivery
                formRef={deliveryRef}
                onNext={onNext}
                setFormData={setFormData}
              />
            )}
            {active.shipping.active && (
              <Shipping
                product={product}
                formRef={shippingRef}
                setFormData={setFormData}
                onNext={onNext}
              />
            )}
            {active.billing.active && (
              <Billing
                formRefa={billingRef}
                onNext={onNext}
                setFormData={setFormData}
              />
            )}
            {/* <Delivery formRef={deliveryRef}/>
          <Shipping product={product} formRef={shippingRef} />
          <Billing formRefa={billingRef}/> */}
          </div>
          <div className="checkout__process">
            <div className="checkout__process-item">
              <div className="checkout__process-header">
                <div className="process__title">Delivery</div>
                <Button className="process__button round-button-white">
                  Sửa
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout__summary">
          <div className="content__title">Tóm tắt đơn hàng</div>
          <div className="checkout__summary-content">
            <div className="checkout__summary-item grid">
              <div className="summary__name" onClick={() => onNext(0)}>
                Giá trị
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
          {/* <div className="checkout__summary-preview">
            <div className="content__title">
              Dự kiến giao Tue, Nov 8 - Tue, Nov 15{" "}
            </div>
            <div className="checkout__summary-product">
              {product.map(({ image, name, quantity, variants, price }) => (
                <div className="summary__product grid">
                  <img src={image} alt="" className="summary-image" />
                  <div className="summary__item-info">
                    <div className="summary__item-name">{name}</div>
                    <div className="summary__item-quantity">Qty {quantity}</div>
                    <div className="summary__item-size">
                      Size EU {variants.size}
                    </div>
                    <div className="summary__item-name">
                      {" "}
                      {Utils.formatMoney(price) || 0}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
