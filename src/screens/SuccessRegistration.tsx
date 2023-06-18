import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-paper';
import tw from 'twrnc'

// Use require to import the SVG file
const welcome = require('../../assets/images/welcome.svg');


export default function SuccessRegistration() {
    return (
        <View style={tw`flex-1 bg-white px-10`}>
            <View style={tw`flex-1 items-center justify-center`}>
                <Image
                    style={tw`w-full h-50% my-5`}
                    source={welcome}
                    contentFit="fill"
                />
                <Text style={tw`font-bold text-lg mb-2`}> Welcome, Johnson Doe!</Text>
                <Text style={tw`font-light text-center w-full`}>You are all set now, let's find your interest group buddies!</Text>
            </View>

            <View style={tw`flex items-center justify-center h-1/5`}>
                <LinearGradient style={tw`rounded-full w-full shadow-lg`} colors={['#9DCEFF', '#8658E8']} locations={[0.7, 0]} start={{ x: 0.2, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                    <Button mode="text" style={tw`w-full shadow-lg `} textColor='white'>Go To Home</Button>
                </LinearGradient>
            </View>
            <StatusBar style="auto" />
        </View >
    );
}
