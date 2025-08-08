import axiosI from "../utils/axiosInstance.js";

export const fetchProduct = async (filters = {}) => {
  const response = await axiosI.get("/products", {
    params: filters,
  });
// console.log(response)
  return response.data;
};
