import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SuccessRegistration from './src/screens/SuccessRegistration';
import Home from './src/screens/Home';
import Navbar from './src/components/NavElement';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <Navbar {...props} />}
        screenOptions={{ tabBarLabelPosition: 'beside-icon' }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Leaderboard" component={SuccessRegistration} />
        <Tab.Screen name="Calendar" component={SuccessRegistration} />
        <Tab.Screen name="Settings" component={SuccessRegistration} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
