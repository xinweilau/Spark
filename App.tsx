import { AuthProvider } from "./src/contexts/AuthContext";
import Router from "./src/navigation/Router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
}
