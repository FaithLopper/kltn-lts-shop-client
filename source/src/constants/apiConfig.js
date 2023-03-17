import { apiUrl } from '.';

const baseHeader = {
    'Content-Type': 'application/json',
};

const multipartFormHeader = {
    'Content-Type': 'multipart/form-data',
};

const apiConfig = {
    account: {
        login: {
            baseURL: `${apiUrl}v1/account/login`,
            method: 'POST',
            headers: baseHeader,
        },
        logout: {
            baseURL: `${apiUrl}v1/account/logout`,
            method: 'GET',
            headers: baseHeader,
        },
        getProfile: {
            baseURL: `${apiUrl}v1/customer/profile`,
            method: 'GET',
            headers: baseHeader,
        },
        register: {
            baseURL: `${apiUrl}v1/customer/register`,
            method: 'POST',
            headers: baseHeader,
        },
        updateProfile: {
            baseURL: `${apiUrl}v1/customer/update`,
            method: 'PUT',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}v1/account/get/:id`,
            method: 'GET',
            headers: baseHeader,
        },
        refreshToken: {
            baseURL: `${apiUrl}v1/account/refresh_token`,
            method: 'POST',
            headers: baseHeader,
        },
        requestForgetPass: {
            baseURL: `${apiUrl}v1/account/request_forget_password`,
            method: 'POST',
            headers: baseHeader,
        },
        forgetPassword: {
            baseURL: `${apiUrl}v1/account/forget_password`,
            method: 'POST',
            headers: baseHeader,
        },
    },
    news: {
        getList: {
            baseURL: `${apiUrl}v1/news/list-news`,
            method: 'GET',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}v1/news/get-news/:id`,
            method: 'GET',
            headers: baseHeader,
        },
        categoryAutoComplete: {
            baseURL: `${apiUrl}v1/category/auto-complete`,
            method: 'GET',
            headers: baseHeader,
        },
    },
    product: {
        getList: {
            baseURL: `${apiUrl}v1/product/get-by-category`,
            method: 'GET',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}v1/product/get-details/:id`,
            method: 'GET',
            headers: baseHeader,
        },
    },
    location: {
        getList: {
            baseURL: `${apiUrl}v1/locations/list`,
            method: 'GET',
            headers: baseHeader,
        },
    },
    order: {
        getList: {
            baseURL: `${apiUrl}v1/order/list`,
            method: 'GET',
            headers: baseHeader,
        },
        getById: {
            baseURL: `${apiUrl}v1/order/get`,
            method: 'GET',
            headers: baseHeader,
        },
        create: {
            baseURL: `${apiUrl}v1/order/create`,
            method: 'POST',
            headers: baseHeader,
        },
    },
};

export default apiConfig;
