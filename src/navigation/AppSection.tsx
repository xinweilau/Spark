import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();

export default function AppSection() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator >
    )
}
