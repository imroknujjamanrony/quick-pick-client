import { useMutation } from "@tanstack/react-query";
import axiosI from "../utils/axiosInstance.js";

export function useAddProduct(data) {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosI.post("/products", data);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("✅ Product added successfully:", data);
    },
    onError: (error) => {
      console.error("❌ Failed to add product:", error);
    },
  });
}
