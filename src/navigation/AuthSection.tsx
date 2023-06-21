import SuccessRegistration from '../screens/SuccessRegistration';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import Navbar from '../components/NavElement';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Settings from './Settings'

const Tab = createBottomTabNavigator();

export default function AuthSection() {
    return (
        <Tab.Navigator
            tabBar={(props) => <Navbar {...props} />}
            screenOptions={{ tabBarLabelPosition: 'beside-icon', headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
            <Tab.Screen name="Calendar" component={SuccessRegistration} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}
