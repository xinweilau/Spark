import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc"
import EventDetailBar from "../navigation/EventDetailBar";
import { Activity } from "../types/Activity";

const basketball = require('../../assets/images/basketball.svg');

export default function Rewards() {
    const navigation = useNavigation<RewardsScreenProps>();
    const route = useRoute<RouteProp<RewardsScreenProps>>();
    const activity = route.params as Activity;

    

    return (
       <View>
        
       </View>
    )
}
