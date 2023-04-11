import apiConfig from '@constants/apiConfig';
import useAuth from '@hooks/useAuth';
import useFetch from '@hooks/useFetch';
import routes from '@routes';
import { removeCacheAccessToken } from '@services/userService';
import { accountActions } from '@store/actions';
import { actions } from '@store/actions/cart';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import logout from '@assets/images/logout.png';
import './Header.scss';
import Menu from './Menu';
import Nav from './Nav';
const AppHeader = () => {
    const { profile: userData } = useAuth();
    const { execute: executeLogout } = useFetch(apiConfig.account.logout);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogout = () => {
        executeLogout({
            onCompleted: () => {
                try {
                    removeCacheAccessToken();
                    dispatch(accountActions.logout());
                    dispatch(actions.updateCart({ type: "EMPTY_CART" }));
                    toast.success("Đăng xuất thành công !");
                    navigate(routes.loginPage.path);
                } catch (error) {
                    toast.error('Đăng xuất thất bại !');
                }
            },
        });
    };

    const NavigatorMenu = [
        {
            title: 'findStore',
            refKey: '/store',
            // refValue: homeRef,
        },
        {
            title: 'help',
            refKey: '/help',
            // refValue: functionRef,
        },
        {
            title: 'login',
            refKey: '/login',
            // refValue: servicesRef,
        },
        {
            title: 'signIn',
            refKey: '/register',
            // refValue: reviewRef,
        },
    ];

    return (
        <header className="header">
            <div className="header__container">
                <Menu NavigatorMenu={NavigatorMenu} userData={userData} onLogout={onLogout} />
                <Nav
                // cartProduct={cartProduct}
                // closeModalCart={closeModalCart}
                // cartListData={cartListData}
                // modalStatus={modalStatus}
                />
                {/* <HotNew/>  */}
            </div>
        </header>
    );
};

export default AppHeader;
