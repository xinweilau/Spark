import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc"
import EventDetailBar from "../navigation/EventDetailBar";
import { Activity } from "../types/Activity";
import GradientButton from "../components/GradientButton"
import { TextInput } from "react-native-paper"

const basketball = require('../../assets/images/basketball.svg');

export default function EditProfile() {
    const navigation = useNavigation<EditProfileScreenProps>();
    const route = useRoute<RouteProp<EditProfileScreenProps>>();
    const activity = route.params as Activity;

    const handleSignUp = () => {
        console.log("Save Changes Clicked")
    }

    return (
        
        <View style={tw`flex flex-col items-center bg-white `}>
            <TextInput
                label="Name"
                style={tw`bg-transparent p-0 w-full`}
                underlineColor="#B9B9BB"
                activeUnderlineColor="#4718AD"
                
            />
            
            <View style={tw`py-65`}>

            </View>
            <GradientButton 
                onPress={handleSignUp}
                buttonLength={tw`w-7/8`}
                buttonStyle={tw`rounded-tl-lg rounded-tr-lg rounded-bl-lg w-full shadow-lg p-7`}
                textStyle={tw`text-white font-bold`}
                colors={['#8658E8', '#4718AD']}
                locations={[0, 1]}
                start={{ x: 0.0, y: 1 }}
                end={{ x: 1, y: 0 }}>
                Save Changes
            </GradientButton>
            <View style={tw`py-50`}>

            </View>
        </View>
            
    )
}