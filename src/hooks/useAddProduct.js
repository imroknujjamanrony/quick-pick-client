import { useMutation } from "@tanstack/react-query";
import axiosI from "../utils/axiosInstance.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useAddProduct(data) {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosI.post("/products", data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("✅ Product added successfully:", data);
      navigate("/admin-products");
    },
    onError: (error) => {
      toast.error("❌ Failed to add product:", error);
    },
  });
}
