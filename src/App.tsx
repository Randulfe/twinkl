import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Page from "./Page";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
};

export default App;
