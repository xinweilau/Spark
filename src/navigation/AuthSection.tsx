import SuccessRegistration from '../screens/SuccessRegistration';
import Navbar from '../components/NavElement';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SettingsStack from './SettingsStacks'
import Settings from '../screens/Settings'
import Calendar from '../screens/Calendar'

const Tab = createBottomTabNavigator();

export default function AuthSection() {
    return (
        <Tab.Navigator
            tabBar={(props) => <Navbar {...props} />}
            screenOptions={{ tabBarLabelPosition: 'beside-icon', headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Leaderboard" component={SuccessRegistration} />
            <Tab.Screen name="Calendar" component={Calendar} />
            <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
    )
}
