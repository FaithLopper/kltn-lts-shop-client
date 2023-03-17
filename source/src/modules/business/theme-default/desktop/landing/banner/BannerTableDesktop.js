import React from 'react';
import Slider from 'react-slick';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
};

const BannerTableDesktop = (props) => {
    const { data } = props;
    const banners = JSON.parse(JSON.stringify(data));

    return (
        <div className="home__banner">
            <Slider {...settings}>
                {banners ? (
                    banners.map(({ image, redirect }, index) => {
                        return (
                            <div className="banner__wrapper" key={index}>
                                <a href={redirect} className="hotnew__redirect">
                                    <div className="banner__image" style={{ backgroundImage: `url(${image})` }}></div>
                                </a>
                            </div>
                        );
                    })
                ) : (
                    <></>
                )}
            </Slider>
        </div>
    );
};

export default BannerTableDesktop;
