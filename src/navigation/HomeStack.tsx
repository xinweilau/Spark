import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import EventDetail from "../screens/EventDetail";
import ActivityCategoryStack from "./ActivityCategoryStack";

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
                component={ActivityCategoryStack}
                options={{
                    headerShadowVisible: false,
                    headerTitle: "",
                }} />
        </HomeStackNav.Navigator>
    )
}
