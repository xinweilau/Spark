import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import EventDetail from "../screens/EventDetail";
import EventCategory from "../screens/EventCategory";

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
                component={EventDetail}
                options={{
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }} />
            <HomeStackNav.Screen
                name="EventCategory"
                component={EventCategory}
                options={{
                    headerShadowVisible: false,
                    headerTitle: undefined,
                }} />

        </HomeStackNav.Navigator>
    )
}
