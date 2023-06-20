import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventCategoryTabBar from "../components/EventCategoryTabBar";
import { CategoryActivity, Sample } from "../screens/EventCategory";

const Tab = createMaterialTopTabNavigator();

export default function EventCategoryBar(props: { id: string }) {
    return (
        <Tab.Navigator
            tabBar={(props) => <EventCategoryTabBar {...props} />}
            screenOptions={{
                animationEnabled: false,
                swipeEnabled: false,
            }}
        >
            <Tab.Screen
                name="All"
                children={() => <CategoryActivity {...props} />} />
            <Tab.Screen
                name="Liked"
                children={() => <CategoryActivity {...props} liked />} />
        </Tab.Navigator>
    )
}
