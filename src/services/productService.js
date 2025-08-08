import axiosI from "../utils/axiosInstance.js";

export const fetchProduct = async (filters = {}) => {
  const response = await axiosI.get("/products", {
    params: filters,
  });
  return response.data;
};

export const fetchSingleProduct = async (id) => {
  const response = await axiosI.get(`/product/68963d71c8ec8c336e9f09af`);
  console.log("fetchSingleProduct", id);
  return response.data; 
};
