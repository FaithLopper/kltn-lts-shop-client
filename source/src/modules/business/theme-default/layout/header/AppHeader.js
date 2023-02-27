import useAuth from '@hooks/useAuth';
import React from 'react';
// import logout from '@assets/images/logout.png';
import './Header.scss';
import Menu from './Menu';
import Nav from './Nav';
const AppHeader = () => {
    const { profile :userData } = useAuth();
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
                <Menu NavigatorMenu={NavigatorMenu} userData={userData}/>
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
