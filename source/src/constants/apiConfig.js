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
  }
};

export default apiConfig;
