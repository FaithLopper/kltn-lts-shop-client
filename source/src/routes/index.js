import PageNotAllowed from '@components/common/page/PageNotAllowed';
import BussinessLandingPage from '@modules/business/containers/landing';
import Bussiness2LandingPage from '@modules/business_2/containers/landing';
import PublicLayout from '@modules/business/theme-default/layout/PublicLayout';
import PageNotFound from '@components/common/page/PageNotFound';
import LoginContainer from '@modules/business/containers/login';
import RegisterContainer from '@modules/business/containers/register';
/*
	auth
		+ null: access login and not login
		+ true: access login only
		+ false: access not login only
*/
const routes = {
    pageNotAllowed: {
        path: '/not-allowed',
        component: PageNotAllowed,
        auth: null,
        title: 'Page not allowed',
    },
    homePage: {
        path: '/',
        type: {
            bussiness: BussinessLandingPage,
            bussiness_2: Bussiness2LandingPage,
        },
        auth: null,
        title: 'Home',
    },
    loginPage: {
        path: '/login',
        component: LoginContainer,
        auth: false,
        title: 'Login page',
        layout: PublicLayout,
    },
    registerPage: {
        path: '/register',
        component: RegisterContainer,
        auth: false,
        title: 'Register page',
        layout: PublicLayout,
    },
    notFound: {
        component: PageNotFound,
        auth: null,
        title: 'Page not found',
        path: '*',
        layout: PublicLayout,
    },
};

export default routes;
