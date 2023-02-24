import React from 'react';
import RenderContext from '@components/common/elements/RenderContext';
import ThemeDefaultLayout from '@modules/business_2/theme-default/layout/CampaignDefautLayout';
import LandingDefaultTheme from '@modules/business_2/theme-default/desktop/landing';
function CampaignLandingPage() {
    return (
        <RenderContext
            layout={{
                defaultTheme: ThemeDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: LandingDefaultTheme,
                },
                mobile: {
                    defaultTheme: LandingDefaultTheme,
                },
            }}
        />
    );
}

export default CampaignLandingPage;
