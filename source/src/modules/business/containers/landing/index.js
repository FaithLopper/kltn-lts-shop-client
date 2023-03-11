import React from 'react';

import { DEFAULT_LANGUAGE_ID } from '@constants';
import { filterLanguage } from '@utils';
import { LandingPageDesktop, LandingPageMobile } from '@modules/business/theme-default/desktop/landing';
import RenderContextLayout from '@components/common/elements/RenderContextLayout';
import NewsContainer from './contents/NewsContainer';
const BussinessLandingPage = () => {
    return (
        <RenderContextLayout
            layouts={{
                desktop: {
                    defaultTheme: LandingPageDesktop,
                },
                mobile: {
                    defaultTheme: LandingPageMobile,
                },
            }}
        >
            <NewsContainer />
        </RenderContextLayout>
    );
};

export default BussinessLandingPage;
