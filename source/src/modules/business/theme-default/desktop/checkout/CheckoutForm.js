import { QuestionCircleFilled } from '@ant-design/icons';
import { formatMoney } from '@utils';
import { Button, Form } from 'antd';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { generatePath, Link, useNavigate } from 'react-router-dom';
// import Billing from './Billing';
import Delivery from './Delivery';
import Payment from './Payment';
import './checkout.scss';
import { appCart, appSession, COD_PAYMENT } from '@constants';
import routes from '@routes';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { actions } from '@store/actions/cart';
import { getData, setData } from '@utils/localStorage';
// import Shipping from './Shipping';
const CheckoutForm = ({ executeGetLocation, executeCreateOrder, cartListData }) => {
    const deliveryRef = useRef();
    const shippingRef = useRef();
    const billingRef = useRef();
    const navigate = useNavigate();
    const [ product, setProduct ] = useState(cartListData);
    const [ totalPrice, setTotalPrice ] = useState(0);
    const [ avaible, setAvaible ] = useState(false);
    const dispatch = useDispatch();
    const [ active, setActive ] = useState({
        delivery: { active: true, isEdited: false },
        shipping: { active: false, isEdited: false },
        // billing: { active: false, isEdited: false },
        payment: { active: false, isEdited: false },
    });

    const [ form, setForm ] = useState({
        delivery: {},
        shipping: {},
        billing: {},
        payment: {},
    });
    const { delivery, shipping, billing, payment } = form;
    const [ loading, setLoading ] = useState(false);
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
    }, [ form.billing ]);

    useEffect(() => {
        if (cartListData.length !== 0) setAvaible(true);
    }, []);

    useEffect(() => {
        let total = 0;
        if (product.length !== 0) product.map((item) => (total = total + item.selectedPrice));
        setTotalPrice(total);
    }, [ product ]);

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
                    setLoading(false);
                    clearCartData(getData(appSession));
                    navigate(routes.summaryPage.path, { state: { id, status, totalPrice } });
                    toast.success('Tạo đơn hàng thành công');
                }
            },
            onError: () => {
                setLoading(false);
                toast.error('Tạo đơn hàng thất bại !!!');
                navigate(routes.cartPage.path);
            },
        });
    };

    const clearCartData = (userId) => {
        dispatch(actions.destroyCart());
        let storagePath = '';
        if (userId) {
            storagePath = `${appCart}-${userId}`;
        } else storagePath = `${appCart}`;
        setData(storagePath, {
            cartListData: [],
            userData: null,
        });
    };

    const mappingProductData = () => {
        if (cartListData.length !== 0) {
            let orderItems = [];
            cartListData.map((item) => {
                if (item.selectedVariants)
                    orderItems.push({
                        productId: item.id,
                        quantity: item.quantity,
                        productConfigs: item.selectedVariants.map((variant) => {
                            return { configId: variant.configId, variantIds: [ variant.id ] };
                        }),
                    });
            });
            return orderItems;
        }
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
                            <div className="summary__price">{formatMoney(totalPrice || 0)}</div>
                        </div>

                        <div className="checkout__summary-item grid">
                            <div className="summary__name">Chi phí vận chuyển</div>
                            <div className="summary__price">Miễn phí</div>
                        </div>
                    </div>
                    <div className="checkout__summary-content">
                        <div className="checkout__summary-item grid">
                            <div className="summary__name">Tổng </div>
                            <div className="summary__price">{formatMoney(totalPrice || 0)}</div>
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
                                        <div className="summary__item-quantity">Qty {quantity}</div>
                                        <div className="summary__item-size">Size EU {variants.size}</div>
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
