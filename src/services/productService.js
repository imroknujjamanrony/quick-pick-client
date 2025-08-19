import axiosI from "../utils/axiosInstance.js";

export const fetchProduct = async (filters = {}) => {
  const response = await axiosI.get("/products", {
    params: filters,
  });
  return response.data;
};

export const fetchSingleProduct = async (id) => {
  const response = await axiosI.get(`/product/${id}`);
  // console.log("fetchSingleProduct", id);
  return response.data.data;
};

// productService.js
export const uploadProduct = async (productData) => {
  const response = await axiosI.post("/products", productData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axiosI.delete(`/product/${id}`);
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await axiosI.put(`/product/${id}`, productData);
  return response.data;
};

export const deleteProductImage = async (id) => {
  const response = await axiosI.patch(`/productImage/${id}`);
  return response.data;
};

export const updateProductImage = async (id, updatedData) => {
  const response = await axiosI.patch(`/productImage/${id}`, updatedData);
  return response.data;
};

export const featureProduct = async (id, isFeatured) => {
  const response = await axiosI.patch(`/feature-product/${id}`, { isFeatured }, {withCredentials: true});
  return response.data;
};

export const organicProduct = async ({ id, isOrganic }) => {
  const response = await axiosI.patch(`/orgaanic-product/${id}`, { isOrganic });
  return response.data;
};

export const submitReeview = async (reviewData) => {
  const { data } = await axiosI.post("/review", reviewData);
  return data;
};

export const fetchReeview = async (productId) => {
  const { data } = await axiosI.get("/reviews", {
    params: {
      productId,
    },
  });
  console.log(data)
  return data;
};