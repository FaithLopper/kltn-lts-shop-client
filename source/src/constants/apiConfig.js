const baseHeader = {
    'Content-Type': 'application/json',
}

const multipartFormHeader = {
    'Content-Type': 'multipart/form-data',
}

const apiConfig = {
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
    }
}

export default apiConfig
