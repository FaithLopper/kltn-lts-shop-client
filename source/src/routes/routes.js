import NotFoundPage from "../components/common/desktop/appLayout/components/body/NotFoundPage"
import LoadingContainer from "../components/common/desktop/appLayout/components/common/components/LoadingContainer"
import CartPage from "../containers/CartPage"
import CheckoutPage from "../containers/CheckoutPage"
import LandingPage from "../containers/LandingPage"
import LoginPage from "../containers/LoginPage"
import NewDetailPage from "../containers/NewDetailPage"
import RegisterPage from "../containers/RegisterPage"
import SummaryPage from "../containers/SummaryPage"
const desktopRoutes = {
    root: {
        path: '/',
        component:LandingPage,
        auth: false, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'Trang chủ',
        routeConfig: {
            contentClass: 'landing-site'
        }
    },
    loginPage: {
        path: '/login',
        component: LoginPage,
        auth: true, // Consider if this site need userdata
        // exac.t: !isMobile ? false : true,
        exact: true,
        title: 'Đăng nhập',
        routeConfig: {
            contentClass: 'login-site'
        },
    },
    registerPage: {
        path: '/register',
        component: RegisterPage,
        auth: true, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'Đăng kí',
        routeConfig: {
            contentClass: 'register-site'
        },
    },
    cartPage: {
        path: '/cart',
        component: CartPage,
        auth: false, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'Giỏ hàng',
        routeConfig: {
            contentClass: 'cart-site'
        },
    },
    checkoutPage: {
        path: '/checkout',
        component: CheckoutPage,
        auth: false, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'Thanh toán',
        routeConfig: {
            contentClass: 'checkout-site'
        },
    },
    summaryPage: {
        path: '/summary',
        component: SummaryPage,
        auth: false, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'Thanh toán',
        routeConfig: {
            contentClass: 'summary-site'
        },
    },
    newDetailPage: {
        path: '/news/:id',
        component: NewDetailPage,
        auth: false, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: false,
        title: 'Tin tức',
        routeConfig: {
            contentClass: 'new-site'
        },
    },
    // pageNotAllowed: {
    //     path: '/not-allowed',
    //     component: PageNotAllowed,
    //     auth: null,
    //     title: 'title.notAllowedPage',
    // },
    // // put this at last
    notFound: {
        component: NotFoundPage,
        auth: false,
        title: 'title.notFoundPage',
    },
}

const mobileRoutes = {
    root: {
        path: '/',
        component: LandingPage,
        auth: true, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'title.landingPage',
        routeConfig: {
            contentClass: 'landing-site'
        }
    },
    loginPage: {
        path: '/login',
        component: LoginPage,
        auth: false, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'title.loginPage',
        routeConfig: {
            contentClass: 'login-site'
        },
    },
    registerPage: {
        path: '/register',
        component: RegisterPage,
        auth: true, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'title.registerPage',
        routeConfig: {
            contentClass: 'register-site'
        },
    },
    // pageNotAllowed: {
    //     path: '/not-allowed',
    //     component: PageNotAllowed,
    //     auth: null,
    //     title: 'title.notAllowedPage',
    // },
    // // put this at last
    notFound: {
        component: NotFoundPage,
        auth: null,
        title: 'title.notFoundPage',
    },
}

export {
    mobileRoutes,
    desktopRoutes,
}