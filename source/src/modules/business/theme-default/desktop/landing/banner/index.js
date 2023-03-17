import React from 'react';
import './index.scss';
const BannerLayout = ({ children }) => {
    return (
        <section className="home" id="home">
            <div className="home__container">{children}</div>
        </section>
    );
};

export default BannerLayout;
