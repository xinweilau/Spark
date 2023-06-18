import { NavigationContainer } from "@react-navigation/native";
import AppSection from "./AppSection";
import AuthSection from "./AuthSection";
import useAuth from "../utils/useAuth";

export default function Router() {
    const { isUserAuthenticated } = useAuth();

    return (
        <NavigationContainer>
            {isUserAuthenticated ? <AuthSection /> : <AppSection />}
        </NavigationContainer>
    )
}
