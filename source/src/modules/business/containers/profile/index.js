import RenderContext from '@components/common/elements/RenderContext';
import React from 'react';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import NewDetailComponent from '@modules/business/theme-default/desktop/new';
import useFetch from '@hooks/useFetch';
import apiConfig from '@constants/apiConfig';
import { useParams } from 'react-router-dom';
const ProfileContainer = () => {
    const params = useParams();
    const { data: dataConfig, loading } = useFetch(apiConfig.news.getById, {
        immediate: true,
        mappingData: (res) => res.data,
        pathParams: { id: params.id },
    });
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: NewDetailComponent,
                },
                mobile: {
                    defaultTheme: NewDetailComponent,
                },
            }}
            dataConfig={dataConfig || {}}
            loading={loading}
            layoutProps={{
                dataConfig,
            }}
        />
    );
};

export default ProfileContainer;
