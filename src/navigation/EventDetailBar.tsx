import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventDetailTabBar from "../components/EventDetailTabBar";
import { EventDescription, EventMeta } from "../screens/EventDetail";
import { Activity } from "../types/Activity";

const Tab = createMaterialTopTabNavigator();

export default function EventDetailBar({ activity }: { activity: Activity }) {
    return (
        <Tab.Navigator tabBar={(props) => <EventDetailTabBar {...props} />}>
            <Tab.Screen
                name="Description"
                children={() => <EventDescription {...activity} />} />
            <Tab.Screen
                name="Details"
                children={() => <EventMeta {...activity} />} />
        </Tab.Navigator>
    )
}
