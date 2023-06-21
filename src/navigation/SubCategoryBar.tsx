import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventCategoryTabBar from "../components/EventCategoryTabBar";
import { SubCategoryList } from "../screens/SubCategory";

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
                children={() => <SubCategoryList {...props} />} />
            <Tab.Screen
                name="Liked"
                children={() => <SubCategoryList {...props} liked />} />
        </Tab.Navigator>
    )
}
