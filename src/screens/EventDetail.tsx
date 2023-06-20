import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc"
import EventDetailBar from "../navigation/EventDetailBar";

const basketball = require('../../assets/images/basketball.svg');

export default function EventDetail() {
    const navigation = useNavigation<EventDetailScreenProps>();
    const route = useRoute<RouteProp<EventDetailScreenProps>>();
    const { id, title } = route.params as EventDescriptionParams;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: title,
        });
    }, [navigation, title]);

    return (
        <View style={tw`flex flex-col w-full h-full bg-white`}>
            <View style={tw`w-full flex-1`}>
                <Image
                    source={basketball}
                    style={tw`w-full h-full rounded-bl-3xl rounded-br-3xl`}
                    contentFit="cover" />
            </View>
            <View style={tw`flex flex-col h-4/7 p-4 pb-24`}>
                <Text style={tw`text-lg font-semibold text-[#464646]`}>Basketball</Text>
                <EventDetailBar />
            </View>
        </View>
    )
}

interface EventDescriptionParams {
    id: number;
    title: string;
}

export function EventDescription() {
    const [showAllLines, setShowAllLines] = useState<boolean>(false);

    const toggleShowAllLines = () => {
        setShowAllLines(!showAllLines);
    }

    return (
        <View style={tw`flex w-full h-full bg-white gap-2`}>
            <Text
                style={tw`text-[#8A8A9D] leading-5`}
                numberOfLines={!showAllLines && 4 || undefined}>
                Viverra sollicitudin auctor eget nascetur quis velit id blandit,
                sodales nostra quam habitasse risus gravida fermentum elementum,
                sapien massa lorem placerat dis rhoncus ornare.

                Viverra sollicitudin auctor eget nascetur quis velit id blandit,
                sodales nostra quam habitasse risus gravida fermentum elementum,
                sapien massa lorem placerat dis rhoncus ornare.

                Viverra sollicitudin auctor eget nascetur quis velit id blandit,
                sodales nostra quam habitasse risus gravida fermentum elementum,
                sapien massa lorem placerat dis rhoncus ornare.
            </Text>
            <TouchableOpacity
                activeOpacity={1}
                accessibilityRole="button"
                accessibilityLabel={showAllLines && "Show less" || "Show more"}
                onPress={toggleShowAllLines}>
                <Text style={tw`text-[#3A63E0] font-semibold`}>
                    {showAllLines && "Show less" || "Show more"}
                </Text>
            </TouchableOpacity>
        </View>

    )
}

export function EventMeta() {
    return (
        <View style={tw`flex w-full h-full bg-white gap-4`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Location: </Text>
                <Text style={tw`text-[#8A8A9D]`}>Pioneer Community Center</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Date: </Text>
                <Text style={tw`text-[#8A8A9D]`}>21 June 2023, Wednesday</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Time: </Text>
                <Text style={tw`text-[#8A8A9D]`}>8:45 PM to 9:45 PM</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Max. participans: </Text>
                <Text style={tw`text-[#8A8A9D]`}>6</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Current headcount: </Text>
                <Text style={tw`text-[#8A8A9D]`}>1/6</Text>
            </View>
        </View >
    )
}
