import React, { Component } from 'react';
import notFoundImage from '@assets/images/bg_404.png';

import styles from './PageNotFound.module.scss';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';

class PageNotFound extends Component {
    render() {
        return (
            <BussinessDefaultLayout>
                <div className={styles.pageNotFound}>
                    <img alt="not-found-background" src={notFoundImage} />
                </div>
            </BussinessDefaultLayout>
        );
    }
}

export default PageNotFound;
