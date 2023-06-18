import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '@rneui/themed';
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
                <Button
                    ViewComponent={LinearGradient} // Don't forget this!
                    style={tw` w-full `}
                    containerStyle={tw`w-full rounded-full`}
                    linearGradientProps={{
                        colors: ['#8658E8', '#9DCEFF'],
                        start: { x: 0.2, y: 0.5 },
                        end: { x: 1, y: 0.5 },
                    }}
                >
                    Go To Home
                </Button>
            </View>
            <StatusBar style="auto" />
        </View >
    );
}
