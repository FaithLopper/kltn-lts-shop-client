const baseHeader = {
  "Content-Type": "application/json",
};

const multipartFormHeader = {
  "Content-Type": "multipart/form-data",
};

const apiConfig = {
  productCategory: {
    getAll: {
      path: "v1/product-category/get-all",
      method: "GET",
      headers: baseHeader,
    },
  },
  product: {
    getListByCategory: {
      path: "v1/product/get-by-category",
      method: "GET",
      headers: baseHeader,
    },
  },
  new:{
    getNew: {
      path: "v1/news/list",
      method: "GET",
      headers: baseHeader,
    },
  },
  account: {
    login: {
      path: "v1/account/login",
      method: "POST",
      headers: baseHeader,
    },
    register: {
      path: "v1/customer/register",
      method: "POST",
      headers: baseHeader,
    },
    getProfile: {
      path: "v1/customer/profile",
      method: "GET",
      headers: baseHeader,
    },
  },
};

export default apiConfig;
