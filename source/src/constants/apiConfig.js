const baseHeader = {
    'Content-Type': 'application/json',
}

const multipartFormHeader = {
    'Content-Type': 'multipart/form-data',
}

const apiConfig = {
    file: {
        upload: {
            path: '/v1/file/upload',
            method: 'POST',
            headers: multipartFormHeader
        }
    },
    client: {
        getClientInfo: {
            path: 'v1/product/client-get',
            method: 'GET',
            headers: baseHeader,
        },
        getClientList: {
            path: 'v1/product/client-list',
            method: 'GET',
            headers: baseHeader,
        },
        createClient: {
            path: 'v1/ticket/client-create',
            method: 'POST',
            headers: baseHeader,
        }
    },
    category: {
        getAutoComplete: {
            path: 'v1/category/auto-complete',
            method: 'GET',
            headers: baseHeader,
        }
    },
    news: {
        getClientList: {
            path: 'v1/news/client-list',
            method: 'GET',
            headers: baseHeader,
        },
        getClientInfo: {
            path: 'v1/news/client-get',
            method: 'GET',
            headers: baseHeader,
        }
    }
}

export default apiConfig
