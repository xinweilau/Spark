import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventCategoryTabBar from "../components/EventCategoryTabBar";
import { SubCategoryList } from "../screens/SubCategory";

const Tab = createMaterialTopTabNavigator();

export default function SubCategoryBar() {
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
                children={() => <SubCategoryList />} />
            <Tab.Screen
                name="Liked"
                children={() => <SubCategoryList liked />} />
        </Tab.Navigator>
    )
}
