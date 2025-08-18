import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient()

const TanStackProvider = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
};

export default TanStackProvider;