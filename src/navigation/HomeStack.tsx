import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import EventDescription from "../screens/EventDetail";

const HomeStackNav = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
    return (
        <HomeStackNav.Navigator initialRouteName="Home">
            <HomeStackNav.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }} />
            <HomeStackNav.Screen
                name="EventDetail"
                component={EventDescription}
                options={{
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }} />
        </HomeStackNav.Navigator>
    )
}
