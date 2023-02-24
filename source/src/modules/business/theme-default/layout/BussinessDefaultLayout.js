import React, { useState } from 'react';

import AppHeader from './header/AppHeader';

import styles from './MainLayout.module.scss';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

const BussinessDefaultLayout = ({ children }) => {
    return (
        <div className="master-layout">
            <AppHeader />
            <AppBody>{children}</AppBody>
            <AppFooter />
        </div>
    );
};

export default BussinessDefaultLayout;
