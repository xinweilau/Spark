import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import EventDetail from "../screens/EventDetail";
import SubCategory from "./SubCategoryStack";
import CreateActivity from "../screens/CreateActivity";

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
                name="SubCategory"
                component={SubCategory}
                options={{
                    headerShadowVisible: false,
                    headerTitle: "",
                }} />
            <HomeStackNav.Screen
                name="CreateActivity"
                component={CreateActivity}
                options={{
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerTitle: "Create Activity",
                }} />
        </HomeStackNav.Navigator>
    )
}
