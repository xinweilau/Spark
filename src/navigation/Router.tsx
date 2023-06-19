import { NavigationContainer } from "@react-navigation/native";
import AppSection from "./AppSection";
import AuthSection from "./AuthSection";
import useAuth from "../utils/useAuth";
import EventDescription from "../screens/EventDetail";

export default function Router() {
    const { isUserAuthenticated } = useAuth();

    return (
        <NavigationContainer>
            {isUserAuthenticated ? <AuthSection /> : <AuthSection />}
            {/* <EventDescription /> */}
        </NavigationContainer>
    )
}
