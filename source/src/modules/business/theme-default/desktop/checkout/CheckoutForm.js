import { QuestionCircleFilled } from '@ant-design/icons';
import { formatMoney } from '@utils';
import { Button, Form } from 'antd';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Billing from './Billing';
import Delivery from './Delivery';
import Payment from './Payment';
import './checkout.scss';
import { COD_PAYMENT } from '@constants';
import routes from '@routes';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { actions } from '@store/actions/cart';
// import Shipping from './Shipping';
const CheckoutForm = ({ executeGetLocation, executeCreateOrder, cartListData }) => {
    const deliveryRef = useRef();
    const shippingRef = useRef();
    const billingRef = useRef();
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    const [avaible, setAvaible] = useState(false);
    const dispatch = useDispatch();
    const [active, setActive] = useState({
        delivery: { active: true, isEdited: false },
        shipping: { active: false, isEdited: false },
        // billing: { active: false, isEdited: false },
        payment: { active: false, isEdited: false },
    });

    const [form, setForm] = useState({
        delivery: {},
        shipping: {},
        billing: {},
        payment: {},
    });
    const { delivery, shipping, billing, payment } = form;
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (form.billing.delivery) {
            setForm({
                ...form,
                billing: form.delivery,
            });
        } else
            setForm({
                ...form,
                billing: form.billing,
            });
    }, [form.billing]);

    useEffect(() => {
        if (cartListData.length !== 0) setAvaible(true);
    }, []);

    const sumCartPrice = () => {
        let total = 0;
        if (cartListData.length !== 0) cartListData.map((item) => (total = total + item.price * item.quantity));

        return total;
    };

    const onNext = (current) => {
        switch (current) {
                        case 0:
                            setActive({
                                ...active,
                                delivery: { isEdited: true, active: false },
                                payment: { ...active.payment, active: true },
                                // shipping: { ...active.shipping, active: true },
                            });

                            break;
                        case 1:
                            setActive({
                                ...active,
                                shipping: { isEdited: true, active: false },
                                // billing: { ...active.billing, active: true },
                                payment: { ...active.payment, active: true },
                            });
                            break;
                        case 2:
                            setActive({
                                ...active,
                                billing: { isEdited: true, active: false },
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
                                delivery: data,
                            });
                            break;
                        case 1:
                            setForm({
                                ...form,
                                shipping: data,
                            });
                            break;
                        case 2:
                            setForm({
                                ...form,
                                billing: data,
                            });
                            break;
                        default:
                            break;
        }
    };

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    const handleSubmit = (formValues) => {
        setLoading(true);
        console.log({
            ...delivery,
            ...payment,
            ...formValues,
            orderItems: mappingProductData(),
            paymentMethod: COD_PAYMENT,
        });
        executeCreateOrder({
            data: {
                ...delivery,
                ...payment,
                ...formValues,
                orderItems: mappingProductData(),
                paymentMethod: COD_PAYMENT,
            },
            onCompleted: (responseData) => {
                if (responseData.result) {
                    const { id, status } = responseData.data;
                    console.log('gud');
                    setLoading(false);
                    clearCartData();
                    navigate(routes.summaryPage.path, { state: { id, status, totalPrice: sumCartPrice() } });
                    toast.success('Tạo đơn hàng thành công');
                }
            },
            onError: () => {
                setLoading(false);
                console.log('not gud');
                toast.error('Tạo đơn hàng thất bại !!!');
                // navigate(routes.cartPage.path);
            },
        });
    };

    const clearCartData = () => {
        dispatch(actions.updateCart({ type: 'EMPTY_CART' }));
    };

    const mappingProductData = () => {
        let orderItems = [];
        if (cartListData.length !== 0) {
            cartListData.map((item) => {
                orderItems.push({
                    productId: item.product.id,
                    quantity: item.quantity,
                    productConfigs: item.product.productConfigs.map((config) => {
                        return { configId: config.id, variantIds: config.variants ? config.variants.map((variant) => variant.id) : [] };
                    }),
                });
            });
        }
        return orderItems;
    };
    const onEdit = (current) => {
        switch (current) {
                        case 0:
                            setActive({
                                delivery: { active: true, isEdited: false },
                                shipping: { ...active.shipping, active: false },
                                billing: { ...active.billing, active: false },
                                payment: { ...active.payment, active: false },
                            });

                            break;
                        case 1:
                            setActive({
                                shipping: { active: true, isEdited: false },
                                delivery: { ...active.delivery, active: false },
                                billing: { ...active.billing, active: false },
                                payment: { ...active.payment, active: false },
                            });
                            break;
                        case 2:
                            setActive({
                                billing: { active: true, isEdited: false },
                                delivery: { ...active.delivery, active: false },
                                shipping: { ...active.shipping, active: false },
                                payment: { ...active.payment, active: false },
                            });
                            break;
                        default:
                            break;
        }
        scrollTop();
    };
    return (
        <section className="checkout section">
            <div className="checkout__container page-wrapper grid">
                <div className="checkout__part">
                    <div className="checkout__content">
                        {avaible ? (
                            <>
                                {active.delivery.active && (
                                    <Delivery
                                        formRef={deliveryRef}
                                        onNext={onNext}
                                        setFormData={setFormData}
                                        scrollTop={scrollTop}
                                        executeGetLocation={executeGetLocation}
                                        formData={form.delivery}
                                        // getLocation={getLocation}
                                    />
                                )}
                                {/* {active.shipping.active && (
              <Shipping
                product={product}
                formRef={shippingRef}
                setFormData={setFormData}
                onNext={onNext}
                shippingOption={shippingOption}
                scrollTop={scrollTop}
              />
            )} */}
                                {/* {active.billing.active && (
              <Billing
                formRefa={billingRef}
                onNext={onNext}
                setFormData={setFormData}
                scrollTop={scrollTop}
              />
            )} */}

                                {active.payment.active && (
                                    <Payment
                                        formRefa={billingRef}
                                        onNext={onNext}
                                        setFormData={setFormData}
                                        scrollTop={scrollTop}
                                        handleSubmit={handleSubmit}
                                        loading={loading}
                                    />
                                )}
                            </>
                        ) : (
                            <div>
                                {' '}
                                <span>Bạn không có sản phẩm trong giỏ hàng</span>{' '}
                                <Link to={routes.homePage.path}>quay lại và thêm sản phẩm</Link>{' '}
                            </div>
                        )}
                    </div>
                    <div className="checkout__process">
                        {avaible ? (
                            <>
                                <div className="checkout__process-item">
                                    <div className="checkout__process-header">
                                        <div
                                            className={
                                                active.delivery.active
                                                    ? 'content__title active-title'
                                                    : 'content__title'
                                            }
                                        >
                                            Vận chuyển
                                        </div>
                                        {active.delivery.isEdited ? (
                                            <Button
                                                className="process__button round-button-white"
                                                onClick={() => onEdit(0)}
                                            >
                                                Sửa
                                            </Button>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                    {active.delivery.isEdited ? (
                                        <div
                                            className={
                                                active.delivery.active
                                                    ? 'checkout__process-body active-title'
                                                    : 'checkout__process-body'
                                            }
                                        >
                                            <span>
                                                {delivery.firstName} {delivery.lastName}
                                            </span>
                                            <span>{delivery.addressDetails}</span>
                                            <span>{delivery.receiverName}</span>
                                            <span>{delivery.receiverPhone}</span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                {/*
            <div className="checkout__process-item">
              <div className="checkout__process-header">
                <div
                  className={
                    active.shipping.active
                      ? "content__title active-title"
                      : "content__title"
                  }
                >
                  Giao hàng
                </div>
                {active.shipping.isEdited ? (
                  <Button
                    className="process__button round-button-white"
                    onClick={() => onEdit(1)}
                  >
                    Sửa
                  </Button>
                ) : (
                  <></>
                )}
              </div>
              {active.shipping.isEdited ? (
                <div
                  className={
                    active.delivery.active
                      ? "checkout__process-body active-title"
                      : "checkout__process-body"
                  }
                >
                  <span>{Utils.formatMoney(shipping.shippCost) || 0}</span>
                  <span>{shipping.shippType}</span>
                  <span>{shipping.arrives}</span>
                </div>
              ) : (
                <></>
              )}
            </div> */}

                                {/* <div className="checkout__process-item">
              <div className="checkout__process-header">
                <div
                  className={
                    active.billing.active
                      ? "content__title active-title"
                      : "content__title"
                  }
                >
                  Hoá đơn
                </div>
                {active.billing.isEdited ? (
                  <Button className="process__button round-button-white">
                    Sửa
                  </Button>
                ) : (
                  <></>
                )}
              </div>
              {active.billing.isEdited ? (
                <div
                  className={
                    active.delivery.active
                      ? "checkout__process-body active-title"
                      : "checkout__process-body"
                  }
                >
                  <span>
                    {delivery.firstName} {delivery.lastName}
                  </span>
                  <span>{delivery.address1}</span>
                  <span>{delivery.phone}</span>
                </div>
              ) : (
                <></>
              )}
            </div> */}

                                <div className="checkout__process-item">
                                    <div className="checkout__process-header">
                                        <div
                                            className={
                                                active.payment.active ? 'content__title active-title' : 'content__title'
                                            }
                                        >
                                            Thanh toán
                                        </div>
                                        {active.payment.isEdited ? (
                                            <Button className="process__button round-button-white">Sửa</Button>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                    {active.payment.isEdited ? (
                                        <div
                                            className={
                                                active.delivery.active
                                                    ? 'checkout__process-body active-title'
                                                    : 'checkout__process-body'
                                            }
                                        >
                                            <span>{payment.type}</span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className="checkout__summary">
                    <div className="content__title">Tóm tắt đơn hàng</div>
                    <div className="checkout__summary-content">
                        <div className="checkout__summary-item grid">
                            <div className="summary__name" onClick={() => onNext(0)}>
                                Giá trị
                                <QuestionCircleFilled
                                    className="summary__icon"
                                    style={{ fontSize: '14px', cursor: 'pointer' }}
                                />
                            </div>
                            <div className="summary__price">{formatMoney(sumCartPrice())}</div>
                        </div>

                        <div className="checkout__summary-item grid">
                            <div className="summary__name">Chi phí vận chuyển</div>
                            <div className="summary__price">Miễn phí</div>
                        </div>
                    </div>
                    <div className="checkout__summary-content">
                        <div className="checkout__summary-item grid">
                            <div className="summary__name">Tổng </div>
                            <div className="summary__price">{formatMoney(sumCartPrice())}</div>
                        </div>
                    </div>
                    {/* <div className="checkout__summary-preview">
                        <div className="content__title">Dự kiến giao Tue, Nov 8 - Tue, Nov 15 </div>
                        <div className="checkout__summary-product">
                            {product.map(({ image, name, quantity, variants, price, id }) => (
                                <div className="summary__product grid" key={id}>
                                    <img src={image} alt="" className="summary-image" />
                                    <div className="summary__item-info">
                                        <div className="summary__item-name">{name}</div>
                                        <div className="summary__item-quantity">Qty </div>
                                        <div className="summary__item-size">Size EU </div>
                                        <div className="summary__item-name"> {formatMoney(price) || 0}</div>
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