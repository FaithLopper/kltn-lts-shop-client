import React from 'react';
import LandingPageDesktop from '@modules/business/theme-default/desktop/landing';
import RenderContext from '@components/common/elements/RenderContext';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
const BussinessLandingPage = () => {
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: LandingPageDesktop,
                },
                mobile: {
                    defaultTheme: LandingPageDesktop,
                },
            }}
        />
    );
};

export default BussinessLandingPage;
