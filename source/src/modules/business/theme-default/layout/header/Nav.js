import React, { useEffect } from 'react';
import logo from '@assets/svg/logo-500.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@store/actions/app';
import { AppConstants } from '@constants';
import { concatAllConfigs } from '../../desktop/cart/CartItem';
import { formatMoney } from '@utils';
const Nav = () => {
    const modal = useSelector((state) => state.app.cartModal);
    const showModalProduct = useSelector((state) => state.app.cartProduct);
    const cartListData = useSelector((state) => state.cart.currentCart);
    const dispatch = useDispatch();
    useEffect(() => {
        window.addEventListener('scroll', function () {
            const nav = document.querySelector('.menu');
            if (this.scrollY >= 36) nav.classList.add('off-nav');
            else nav.classList.remove('off-nav');
        });
    }, []);

    useEffect(() => {
        if (modal) showModal(true);
    }, [modal]);

    const showModal = (show) => {
        const cart = document.querySelector('.cart__modal');
        if (show) {
            cart.classList.add('active__modal-cart');
            setTimeout(() => {
                dispatch(actions.hideAppCartModal());
                cart.classList.remove('active__modal-cart');
            }, 4000);
        } else {
            cart.classList.remove('active__modal-cart');
        }
    };
    return (
        <>
            <nav className="nav wrapper">
                <Link to="/">
                    <img src={logo} alt="shop" className="nav__logo" />
                </Link>

                <ul className="nav__list">
                    <li className="nav__item">Nam</li>
                    <li className="nav__item">Nữ</li>
                    <li className="nav__item">Giày</li>
                    <li className="nav__item">Dép</li>
                    <li className="nav__item">Sale</li>
                    <li className="nav__item">Tin tức</li>
                </ul>

                <div className="nav__action">
                    <div className="nav__search">
                        <i className="uil uil-search nav__search-icon"></i>
                        <input type="text" placeholder="Tìm kiếm" className="nav__search-input" />
                    </div>
                    <Link to="/cart">
                        <i className="bx bx-shopping-bag nav__icon" value={cartListData.length}></i>
                    </Link>
                    {/* <i className="bx bx-shopping-bag nav__icon" onClick={()=>showModal(true)} value={3}></i> */}
                </div>
            </nav>
            <div className="cart__modal">
                <div className="card__modal-header">
                    <span>
                        <i className="bx bxs-check-circle" style={{ color: 'green', fontSize: '18px' }}></i> Đã thêm vào
                        giỏ hàng
                    </span>
                    <i className="uil uil-multiply cart__modal-icon" onClick={() => showModal(false)}></i>
                </div>
                {Object.keys(showModalProduct).length !== 0 && (
                    <div className="cart__product grid">
                        <img
                            src={AppConstants.contentRootUrl + showModalProduct.image.image}
                            alt=""
                            className="cart__item-image"
                        />
                        <div className="cart__item-info">
                            <div className="cart__item-name fix-ellip ">{showModalProduct.product.name}</div>
                            <div className="cart__item-variants fix-ellip ">
                                {concatAllConfigs(showModalProduct.product.productConfigs)}
                            </div>
                            <div className="cart__item-quantity fix-ellip ">Số lượng: {showModalProduct.quantity}</div>
                            <div className="cart__item-price fix-ellip ">{formatMoney(showModalProduct.price)}</div>
                        </div>
                    </div>
                )}
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
