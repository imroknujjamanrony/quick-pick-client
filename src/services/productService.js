import axiosI from "../utils/axiosInstance.js";

export const fetchProduct = async (filters = {}) => {
  const response = await axiosI.get("/products", {
    params: filters,
  });
  return response.data;
};

export const fetchSingleProduct = async (id) => {
  const response = await axiosI.get(`/product/${id}`);
  console.log("fetchSingleProduct", id);
  return response.data; 
};


// productService.js
export const uploadProduct = async (productData) => {
  const response = await axiosI.post("/products", productData);
  return response.data;
};
