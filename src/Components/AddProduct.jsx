import ProductForm from "./product/ProductForm";
import { useAddProduct } from "../hooks/useAddProduct";
import { useNavigate } from "react-router";

export default function AddProductPage() {
  const { mutate, isPending, isSuccess } = useAddProduct();
  const handleAddProduct = (data) => {
    console.log("Form data:", data);
    mutate(data);
  };

  return (
    <div className="flex items-center justify-center">
      <div>
        <ProductForm
          onSubmit={handleAddProduct}
          isPending={isPending}
          isSuccess={isSuccess}
        />
      </div>
    </div>
  );
}
