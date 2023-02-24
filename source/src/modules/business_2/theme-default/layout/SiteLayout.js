import { brandName } from '@constants';
import Layout, { Content, Footer } from 'antd/es/layout/layout';
import React from 'react';
import AppHeader from './AppHeader';

import styles from './MainLayout.module.scss';

function SiteLayout({ children } = {}) {
    return (
        <Layout hasSider>
            <Layout>
                <AppHeader hasCollap={false} />
                <Content className={styles.appContent}>
                    <div className={styles.wrapper}>{children}</div>
                    <Footer className={styles.appFooter}>
                        <strong>{brandName} </strong> - © Copyright 2022. All Rights Reserved.
                    </Footer>
                </Content>
            </Layout>
        </Layout>
    );
}

export default SiteLayout;
