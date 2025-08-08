import { useQuery } from "@tanstack/react-query"
import { fetchProduct } from "../services/productService.js"

export const useProducts = (filters = {} ) =>{
    return useQuery({
        queryKey : ['products', filters],
        queryFn : () => fetchProduct(filters)
    })
}