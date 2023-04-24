import { StatusBar } from "expo-status-bar";
import { queryClient, QueryClientProvider } from "@/api/queryClient";
import { Routes } from "@/routes";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <Routes />
    </QueryClientProvider>
  );
}
