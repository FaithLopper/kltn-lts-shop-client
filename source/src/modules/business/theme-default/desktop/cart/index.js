import Button from '@components/common/elements/Button';
import routes from '@routes';
import { actions } from '@store/actions/cart';
import { formatMoney } from '@utils';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './cart.scss';
import { CartItem } from './CartItem';
const CartComponent = ({ cartListData, updateCartItem }) => {
    const navigate = useNavigate();
    let productIndexInCart = -1;
    const dispatch = useDispatch();

    const showCartModal = (e) => {
        const itemRemoveModal = document.querySelector('.section__modal');
        if (e) {
            productIndexInCart = e.target.id;
            itemRemoveModal.classList.add('active-modal-cart');
        } else {
            itemRemoveModal.classList.remove('active-modal-cart');
        }
    };

    const sumCartPrice = () => {
        let total = 0;
        if (cartListData.length !== 0) cartListData.map((item) => (total = total + item.quantity * item.price));

        return total;
    };

    const deleteProduct = () => {
        dispatch(
            actions.updateCart({
                type: 'REMOVE_ITEM',
                updateData: { indexInCart: productIndexInCart },
            }),
        );
        showCartModal(false);
    };

    return (
        <section className="cart">
            <div className="cart__container grid">
                <div className="cart__bag">
                    <div className="content__title">Giỏ hàng</div>
                    <div className="cart__list">
                        {cartListData.length !== 0 ? (
                            cartListData.map((prod, _index) => {
                                return (
                                    <div key={`item-${_index}`}>
                                        <CartItem
                                            {...prod}
                                            indexInCart={_index}
                                            showRemoveItemModal={showCartModal}
                                            updateCartItem={updateCartItem}
                                        />
                                    </div>
                                );
                            })
                        ) : (
                            <div>Không có sản phẩm nào trong giỏ hàng</div>
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
                            <div className="summary__price">{formatMoney(sumCartPrice())}</div>
                        </div>

                        <div className="cart__summary-item grid">
                            <div className="summary__name">Chi phí vận chuyển</div>
                            <div className="summary__price">Miễn phí</div>
                        </div>
                    </div>
                    <div className="cart__summary-content">
                        <div className="cart__summary-item grid">
                            <div className="summary__name">Tổng</div>
                            <div className="summary__price">{formatMoney(sumCartPrice())}</div>
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
                        <Button className="round-button" onClick={() => deleteProduct()}>
                            Xoá
                        </Button>
                        <Button className="round-button-white" onClick={() => showCartModal(false)}>
                            Huỷ
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartComponent;
