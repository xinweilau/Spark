import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings";
import EditProfile from "../screens/EditProfile";
import Rewards
 from "../screens/Rewards";
const SettingsStackNav = createNativeStackNavigator<SettingsStackParamList>();

export default function SettingsStack() {
    return (
        <SettingsStackNav.Navigator initialRouteName="Settings">
            <SettingsStackNav.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                }} />
            <SettingsStackNav.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                    headerTitle: "Edit Profile",
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }} />
            <SettingsStackNav.Screen
                name="Rewards"
                component={Rewards}
                options={{
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerTitle: "Rewards Center",
                }} />
        </SettingsStackNav.Navigator>
    )
}
