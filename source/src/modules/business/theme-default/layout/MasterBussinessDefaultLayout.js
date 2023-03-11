import React from 'react';
import AppHeader from './header/AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

const MasterBussinessDefaultLayout = ({ children }) => {
    return (
        <div className="master-layout">
            <AppHeader />
            <AppBody>{children}</AppBody>
            <AppFooter />
        </div>
    );
};

export default MasterBussinessDefaultLayout;
