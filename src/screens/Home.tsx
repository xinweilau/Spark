import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import useAuth from '../utils/useAuth';

export default function Home() {
    const { isUserAuthenticated } = useAuth();

    return (
        <View style={tw`flex flex-1 bg-white items-center justify-center`}>
            <Text>{`${isUserAuthenticated}`}</Text>
            <StatusBar style="auto" />
        </View>
    );
}
