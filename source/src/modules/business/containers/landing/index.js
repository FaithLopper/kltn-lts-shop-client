import React from 'react';
import useFetch from '@hooks/useFetch';
import apiConfig from '@constants/apiConfig';
import { DEFAULT_LANGUAGE_ID } from '@constants';
import { filterLanguage } from '@utils';
import RenderContext from '@components/common/elements/RenderContext';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import LandingDefaultTheme from '@modules/business/theme-default/desktop/landing';
const BussinessLandingPage = () => {
    const { data: dataNew, loading: loadingNew } = useFetch(apiConfig.news.getList, {
        immediate: true,
        mappingData: (res) => res.data,
        params: {
            size: 6,
            kind: 1,
        },
    });
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: LandingDefaultTheme,
                },
                mobile: {
                    defaultTheme: LandingDefaultTheme,
                },
            }}
            dataNew={dataNew || { data: [] }}
            loading={loadingNew}
        />
    );
};

export default BussinessLandingPage;
