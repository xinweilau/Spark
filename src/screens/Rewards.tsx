import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import EventDetailBar from "../navigation/EventDetailBar";
import { Activity } from "../types/Activity";
import { Button, Dialog, PaperProvider, Portal } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';


import tw from "twrnc"
import { formatDate, formatTime } from "../utils/dateTime";
import GradientButton from "../components/GradientButton";
const rewards1 = require('../../assets/images/rewards1.jpeg');
const rewards2 = require('../../assets/images/rewards2.jpeg');

export default function Rewards() {
    const navigation = useNavigation<RewardsScreenProps>();
    const route = useRoute<RouteProp<RewardsScreenProps>>();
    
    

    return (
        // <SafeAreaView>
        //     <View style={tw``}>
        //         <Image
        //             source={basketball}
        //             style={tw`w-420 h-64 rounded-lg`}
        //         />
        //         <View style={tw`absolute bottom-0 left-0 right-0 bg-blue p-4`}>
        //             <Text style={tw`text-white text-lg font-bold`}>HIIIII</Text>
        //         </View>
        //     </View>
        // </SafeAreaView>
        

        <PaperProvider>
            <View style={tw`flex flex-col w-full h-full bg-white`}>
                <View>
                    <View style={tw` p-3`}>
                        <Image
                            source={rewards1}
                            style={tw`w-full h-60  rounded-3xl`}
                            contentFit="cover" />
                         <View style={tw`pb-1`}>
                            <Text style={tw`font-semibold py-1 pl-2`}>
                                Yearly Leaderboard: 7 days guided tour to Japan
                            </Text>
                        </View>
                    </View>

                    <View style={tw` p-3`}>
                        <Image
                            source={rewards2}
                            style={tw`w-full h-60  rounded-3xl `}
                            contentFit="cover" />
                         <View style={tw`pb-1`}>
                            <Text style={tw`font-semibold py-1 pl-2`}>
                                Monthly Leaderboard: 2 Tickets to Singapore Zoo
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </PaperProvider>
    )
}
