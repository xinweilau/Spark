import SuccessRegistration from '../screens/SuccessRegistration';
import Home from '../screens/Home';
import Navbar from '../components/NavElement';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AuthSection() {
    return (
        <Tab.Navigator
            tabBar={(props) => <Navbar {...props} />}
            screenOptions={{ tabBarLabelPosition: 'beside-icon', headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Leaderboard" component={SuccessRegistration} />
            <Tab.Screen name="Calendar" component={SuccessRegistration} />
            <Tab.Screen name="Settings" component={SuccessRegistration} />
        </Tab.Navigator>
    )
}
