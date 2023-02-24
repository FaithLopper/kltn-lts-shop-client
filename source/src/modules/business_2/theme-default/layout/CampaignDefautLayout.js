import React, { useState } from 'react';

import AppHeader from './AppHeader';

import styles from './MainLayout.module.scss';
import AppBody from './AppBody';
import AppFooter from './AppFooter';
const CampaignDefautLayout = ({ children }) => {
    return (
        <>
            <AppHeader />
            <div className={styles.content}>
                <div className={styles.layout}>
                    <AppBody>{children}</AppBody>
                </div>
            </div>

            <AppFooter />
        </>
    );
};

export default CampaignDefautLayout;
