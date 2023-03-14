import React from 'react';

import { accessRouteTypeEnum, appCart, appSession } from '@constants';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import routes from '.';
import { useDispatch } from 'react-redux';
import { getData } from '@utils/localStorage';
import { actions } from '@store/actions/cart';

const ValidateAccess = ({
    authRequire,
    component: Component,
    componentProps,
    isAuthenticated,
    profile,
    layout: Layout,
}) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const getRedirect = (authRequire) => {
        if (authRequire === accessRouteTypeEnum.NOT_LOGIN && isAuthenticated) {
            const current = getData(appSession);
            const cartData = getData(`${appCart}-${current}`)
                ? getData(`${appCart}-${current}`)
                :  getData(appCart);
            dispatch(actions.initCart({ cartData }));
            return routes.homePage.path;
        }

        if (authRequire === accessRouteTypeEnum.REQUIRE_LOGIN && !isAuthenticated) {
            return routes.loginPage.path;
        }

        // check permistion

        return false;
    };

    const redirect = getRedirect(authRequire);

    if (redirect) {
        return <Navigate state={{ from: location }} key={redirect} to={redirect} replace />;
    }

    return (
        <Component {...(componentProps || {})}>
            <Outlet />
        </Component>
    );
};

export default ValidateAccess;
