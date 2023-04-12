import PageNotAllowed from '@components/common/page/PageNotAllowed';
import BussinessLandingPage from '@modules/business/containers/landing';
import Bussiness2LandingPage from '@modules/business_2/containers/landing';
import PublicLayout from '@modules/business/theme-default/layout/PublicLayout';
import PageNotFound from '@components/common/page/PageNotFound';
import LoginContainer from '@modules/business/containers/login';
import RegisterContainer from '@modules/business/containers/register';
import ProductDetailContainer from '@modules/business/containers/product/ProductDetailContainer';
import CartContainer from '@modules/business/containers/cart';
import ForgetPasswordContainer from '@modules/business/containers/login/ForgetPass';
import CheckoutContainer from '@modules/business/containers/order/CheckoutContainer';
import SummaryContainer from '@modules/business/containers/order/SummaryContainer';
import NewDetailContainer from '@modules/business/containers/new';
import ProfileContainer from '@modules/business/containers/profile';
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
    },
    forgetPage: {
        path: '/login/forget',
        component: ForgetPasswordContainer,
        auth: false,
        title: 'Login page',
    },
    registerPage: {
        path: '/register',
        component: RegisterContainer,
        auth: false,
        title: 'Register page',
    },
    productDetailPage: {
        path: '/product-detail/:id',
        component: ProductDetailContainer,
        auth: null,
        title: 'Product page',
    },
    cartPage: {
        path: '/cart',
        component: CartContainer,
        auth: null,
        title: 'Product page',
    },
    checkoutPage: {
        path: '/checkout',
        component: CheckoutContainer,
        auth: null,
        title: 'Checkout page',
    },
    summaryPage: {
        path: '/summary',
        component: SummaryContainer,
        auth: null,
        title: 'Checkout page',
    },
    newDetailPage: {
        path: '/news/:id',
        component: NewDetailContainer,
        auth: null,
        title: 'Checkout page',
    },
    profilePage: {
        path: '/profile',
        component: ProfileContainer,
        auth: true,
        title: 'Checkout page',
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
