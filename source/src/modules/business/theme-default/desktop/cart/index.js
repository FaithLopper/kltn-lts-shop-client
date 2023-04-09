import Button from '@components/common/elements/Button';
import { AppConstants, shopVariantKey } from '@constants';
import routes from '@routes';
import { actions } from '@store/actions/cart';
import { formatMoney } from '@utils';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './cart.scss';
import CartItem from './CartItem';
const CartComponent = ({ cartListData }) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState(cartListData);
    const [isDelete, setDetele] = useState(null);
    const [productId, setProductId] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();

    const showCartModal = (show) => {
        const cart = document.querySelector('.section__modal');
        if (show) cart.classList.add('active-modal-cart');
        else {
            cart.classList.remove('active-modal-cart');
            setDetele(null);
        }
    };

    const deleteProduct = (index, selectedVariants, id) => {
        setProductId({ index, selectedVariants, id });
        showCartModal(true);
    };

    useEffect(() => {
        if (isDelete === true) {
            setProduct(
                product.filter((item, _index) => {
                    if (_index !== productId.index) {
                        return item;
                    }
                    return false;
                }),
            );
            dispatch(
                actions.removeProduct({
                    product: productId,
                }),
            );
            showCartModal(false);
        } else if (isDelete === false) {
            showCartModal(false);
        }
    }, [isDelete]);

    useEffect(() => {
        let total = 0;
        if (product.length !== 0) product.map((item) => (total = total + item.selectedPrice));
        setTotalPrice(total);
    }, [product]);

    return (
        <section className="cart">
            <div className="cart__container grid">
                <div className="cart__bag">
                    <div className="content__title">Giỏ hàng</div>
                    <div className="cart__list">
                        {product.length !== 0 ? (
                            product.map(({ selectedVariants, name, quantity, selectedPrice, id }, _index) => {
                                return (
                                    <div key={`${_index}-item-${id}`}>
                                        <CartItem />
                                    </div>
                                );
                            })
                        ) : (
                            <>Không có sản phẩm nào trong giỏ hàng</>
                        )}
                    </div>
                </div>
                <div className="cart__summary">
                    <div className="content__title">Tổng đơn hàng</div>
                    <div className="cart__summary-content">
                        <div className="cart__summary-item grid">
                            <div className="summary__name">
                                Giá trị
                                <i
                                    className="uil uil-question-circle"
                                    style={{
                                        fontSize: '14px',
                                        cursor: 'pointer',
                                        marginLeft: '10px',
                                    }}
                                ></i>
                            </div>
                            <div className="summary__price">{formatMoney(totalPrice || 0)}</div>
                        </div>

                        <div className="cart__summary-item grid">
                            <div className="summary__name">Chi phí vận chuyển</div>
                            <div className="summary__price">Miễn phí</div>
                        </div>
                    </div>
                    <div className="cart__summary-content">
                        <div className="cart__summary-item grid">
                            <div className="summary__name">Tổng</div>
                            <div className="summary__price">{formatMoney(totalPrice || 0)}</div>
                        </div>
                    </div>
                    <div className="cart__summary-button">
                        <Button
                            className="round-button"
                            onClick={() => navigate(routes.checkoutPage.path)}
                            style={{ lineHeight: '1px', padding: '30px 0' }}
                        >
                            Thanh toán
                        </Button>
                    </div>
                </div>
            </div>
            <div className="section__modal">
                <div className="modal__content">
                    <div className="modal__header">
                        <i
                            className="uil uil-exclamation-triangle modal__icon"
                            style={{ color: 'rgb(251, 194, 25)' }}
                        ></i>
                        Thông báo
                    </div>

                    <div className="modal__body">Xoá sản phẩm khỏi giỏ hàng ?</div>
                    <div className="modal__action">
                        <Button className="round-button" onClick={() => setDetele(true)}>
                            Xoá
                        </Button>
                        <Button className="round-button-white" onClick={() => setDetele(false)}>
                            Huỷ
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartComponent;
