import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventCategoryTabBar from "../components/EventCategoryTabBar";
import { SubCategoryActivity } from "../screens/SubCategory";

const Tab = createMaterialTopTabNavigator();

export default function SubCategoryBar(props: { id: string }) {
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
                children={() => <SubCategoryActivity {...props} />} />
            <Tab.Screen
                name="Liked"
                children={() => <SubCategoryActivity {...props} liked />} />
        </Tab.Navigator>
    )
}
