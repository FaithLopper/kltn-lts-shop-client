import classNames from 'classnames';
import React from 'react';

import  './AppFooter.scss';

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__content grid">
                    <div className="footer__content-nav">
                        <div className="content__nav-header">FIND A STORE</div>
                        <div className="content__nav-header">BECOME A MEMBER</div>
                        <div className="content__nav-header">SIGN UP FOR EMAIL</div>
                        <div className="content__nav-header">SEND US FEEDBACK</div>
                    </div>

                    <div className="footer__content-nav">
                        <div className="content__nav-header">ABOUT SHOP</div>
                        <div className="content__nav-body">Tin tức</div>
                        <div className="content__nav-body">Sản phẩm</div>
                    </div>

                    <div className="footer__social-nav">
                        <div className="content__nav-social">
                            <i className="bx bxl-facebook-circle"></i>
                        </div>
                        <div className="content__nav-social">
                            <i className="bx bxl-instagram-alt"></i>
                        </div>
                        <div className="content__nav-social">
                            <i className="bx bxl-youtube"></i>
                        </div>
                    </div>

                    <div className="footer__footer-nav">
                        <div className="footer__info">
                            <i className="bx bxs-location-plus"></i> 1 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức,
                            Thành phố Hồ Chí Minh
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <i className="fa fa-copyright" aria-hidden="true"></i> 2022 - Long Term Support, All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
