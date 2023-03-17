import React from 'react';
import RenderContext from '@components/common/elements/RenderContext';
import BannerLayout from '@modules/business/theme-default/desktop/landing/banner';
import BannerTableDesktop from '@modules/business/theme-default/desktop/landing/banner/BannerTableDesktop';

const BannerContainer = () => {
    const bannersData = [
        {
            image: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/20d72001-2965-493d-ac83-21f83ce47721/nike-just-do-it.jpg',
            redirect: '',
        },
        {
            image: 'https://ananas.vn/wp-content/uploads/LowHigh_Desktop-1920x1050.jpg',
            redirect: '',
        },
        {
            image: 'https://ananas.vn/wp-content/uploads/Flannel_1920x1050_desktop.jpeg',
            redirect: '',
        },
        {
            image: 'https://ananas.vn/wp-content/uploads/Hi-im-Mule_1920x1050-Desktop.jpg',
            redirect: '',
        },
    ];
    return (
        <RenderContext
            layout={{
                defaultTheme: BannerLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: BannerTableDesktop,
                },
                mobile: {
                    defaultTheme: BannerTableDesktop,
                },
            }}
            data={bannersData || {}}
        />
    );
};

export default BannerContainer;
