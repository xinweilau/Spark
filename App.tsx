import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuccessRegistration from './src/screens/SuccessRegistration';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SuccessRegistration" component={SuccessRegistration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
