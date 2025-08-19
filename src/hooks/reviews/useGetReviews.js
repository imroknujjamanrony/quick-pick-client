import { useQuery } from '@tanstack/react-query';
import { fetchReeview } from '../../services/productService';

const useGetReviews = (id) => {
    return useQuery({
        queryKey : ['reviews',id],
        queryFn : () => fetchReeview(id),
        enabled : !!id
    })
};

export default useGetReviews;