import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventCategoryTabBar from "../components/EventCategoryTabBar";
import { Sample } from "../screens/EventCategory";

const Tab = createMaterialTopTabNavigator();

export default function EventCategoryBar() {
    return (
        <Tab.Navigator
            tabBar={(props) => <EventCategoryTabBar {...props} />}
            screenOptions={{
                animationEnabled: false,
            }}
        >
            <Tab.Screen
                name="All"
                children={() => <Sample />} />
            <Tab.Screen
                name="Liked"
                children={() => <Sample />} />
        </Tab.Navigator>
    )
}
