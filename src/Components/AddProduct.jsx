import { data } from "framer-motion/client";
import ProductForm from "./product/ProducttForm";
import RelatedProducts from "./RelatedProducts";
import { useState } from "react";
import { useAddProduct } from "../hooks/useAddProduct";

export default function AddProductPage() {
  const [prod, setPord] = useState([]);
  const { mutate, isPending, isSuccess } = useAddProduct();
  const handleAddProduct = (data) => {
    console.log("Form data:", data);
    setPord(data);
    // console.log(prod);
    mutate(data);
  };

//   console.log(isPending) 
//   console.log(isSuccess)

  return (
    <div className="flex items-center">
      <div>
        <ProductForm onSubmit={handleAddProduct} />;
      </div>
      <div>
        <RelatedProducts data={prod} />
      </div>
    </div>
  );
}
