import React, { useState } from 'react';

import AppHeader from './header/AppHeader';

import styles from './MainLayout.module.scss';
import AppBody from './AppBody';
import AppFooter from './AppFooter';
import NewHeader from './header/NewHeader';
const BussinessNewLayout = ({ children, layoutProps }) => {
    const { dataConfig } = layoutProps;
    return (
        <div className="master-layout">
            <NewHeader dataConfig={dataConfig || {}} />
            <AppBody>{children}</AppBody>
            <AppFooter />
        </div>
    );
};

export default BussinessNewLayout;
