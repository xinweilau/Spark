import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventDetailTabBar from "../components/EventDetailTabBar";
import { EventDescription, EventMeta } from "../screens/EventDetail";

const Tab = createMaterialTopTabNavigator();

export default function EventDetailBar() {
    return (
        <Tab.Navigator tabBar={(props) => <EventDetailTabBar {...props} />}>
            <Tab.Screen name="Description" component={EventDescription} />
            <Tab.Screen name="Details" component={EventMeta} />
        </Tab.Navigator >
    )
}
