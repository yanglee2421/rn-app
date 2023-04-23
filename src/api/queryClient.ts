import { QueryClient, DefaultOptions } from "@tanstack/react-query";

export { QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: queries(),
  },
});

function queries(): DefaultOptions["queries"] {
  return {
    staleTime: 1000 * 60 * 5,
  };
}
