import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings";

const SettingsStackNav = createNativeStackNavigator<SettingsScreenParamList>();

export default function HomeStack() {
    return (
        <SettingsStackNav.Navigator initialRouteName="Settings">
            <SettingsStackNav.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                }} />
            {/* <SettingsStackNav.Screen
                name="EventDetail"
                component={EventDetail}
                options={{
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }} />
            <SettingsStackNav.Screen
                name="SubCategory"
                component={SubCategory}
                options={{
                    headerShadowVisible: false,
                    headerTitle: "",
                }} /> */}
        </SettingsStackNav.Navigator>
    )
}
