import SuccessRegistration from '../screens/SuccessRegistration';
// import LeaderboardScreen from '../screens/LeaderboardScreen';
import Navbar from '../components/NavElement';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SettingsStack from './SettingsStacks'
import Settings from '../screens/Settings'
import Calendar from '../screens/Calendar'
import Settings from './Settings'
import Leaderboard from '../screens/Leaderboard';

const Tab = createBottomTabNavigator();

export default function AuthSection() {
    return (
        <Tab.Navigator
            tabBar={(props) => <Navbar {...props} />}
            screenOptions={{ tabBarLabelPosition: 'beside-icon', headerShown: false }}
            initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Leaderboard" component={Leaderboard} />
            <Tab.Screen name="Calendar" component={Calendar} />
            <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
    )
}
