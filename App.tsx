import { AuthProvider } from "./src/contexts/AuthContext";
import Router from "./src/navigation/Router";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
