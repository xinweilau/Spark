import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import EventDetailBar from "../navigation/EventDetailBar";
import { Activity } from "../types/Activity";
import { Button, Dialog, PaperProvider, Portal } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc"
import { formatDate, formatTime } from "../utils/dateTime";
import GradientButton from "../components/GradientButton";
const basketball = require('../../assets/images/basketball.svg');

export default function Rewards() {
    const navigation = useNavigation<RewardsScreenProps>();
    const route = useRoute<RouteProp<RewardsScreenProps>>();
    const activity = route.params as Activity;

    return (
        <PaperProvider>
            <View style={tw`flex flex-col w-full h-full bg-white`}>
                <View style={tw`w-full flex-1`}>
                    <Image
                        source={basketball}
                        style={tw`w-full h-60 rounded-bl-3xl rounded-br-3xl`}
                        contentFit="cover" />
                    <View style={tw`p-5`}>
                        <Text style={tw`font-semibold`}>
                            Yearly Leaderboard: 7 days tour to Japan
                        </Text>
                    </View>
                    <Image
                        source={basketball}
                        style={tw`w-full h-60 rounded-bl-3xl rounded-br-3xl`}
                        contentFit="cover" />
                  
                    <View style={tw`p-5`}>
                        <Text style={tw`font-semibold`}>
                        Monthly Leaderboard: Pair of Tickets to Adventure Cove
                        </Text>
                    </View>
                </View>
            </View>
        </PaperProvider>
    )
}
