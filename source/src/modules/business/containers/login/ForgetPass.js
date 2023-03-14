import RenderContext from '@components/common/elements/RenderContext';
import React from 'react';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import Forgetpass from '@modules/business/theme-default/desktop/login/Forgetpass';
import useFetch from '@hooks/useFetch';
import apiConfig from '@constants/apiConfig';
const ForgetPasswordContainer = () => {
    const { execute: executeForgetPassword } = useFetch(apiConfig.account.forgetPassword, { immediate: false });
    const { execute: executeRequestForget } = useFetch(apiConfig.account.requestForgetPass, { immediate: false });
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: Forgetpass,
                },
                mobile: {
                    defaultTheme: Forgetpass,
                },
            }}
            executeRequestForget={executeRequestForget}
            executeForgetPassword={executeForgetPassword}
        />
    );
};

export default ForgetPasswordContainer;
