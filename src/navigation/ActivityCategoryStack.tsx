import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventCategory from "../screens/EventCategory";
import EventCategoryActivity from "../screens/EventCategoryActivity";

const EventCategoryStackNav = createNativeStackNavigator<EventCategoryStackParamList>();

export default function ActivityCategoryStack() {
    return (
        <EventCategoryStackNav.Navigator initialRouteName="EventCategory">
            <EventCategoryStackNav.Screen
                name="EventCategory"
                component={EventCategory}
                options={{
                    headerShown: false,
                    headerTitle: "",
                }} />

            <EventCategoryStackNav.Screen
                name="EventCategoryActivity"
                component={EventCategoryActivity}
                options={{
                    headerShown: false,
                    headerTitle: "",
                }} />
        </EventCategoryStackNav.Navigator>
    )
}
