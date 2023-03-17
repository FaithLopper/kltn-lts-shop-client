import RenderContext from '@components/common/elements/RenderContext';
import React from 'react';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import SummaryComponent from '@modules/business/theme-default/desktop/checkout/SummaryComponent';
const SummaryContainer = () => {
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: SummaryComponent,
                },
                mobile: {
                    defaultTheme: SummaryComponent,
                },
            }}
        />
    );
};

export default SummaryContainer;
