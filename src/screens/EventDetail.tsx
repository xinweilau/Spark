import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc"
import EventDetailBar from "../navigation/EventDetailBar";
import { Activity } from "../types/Activity";

const basketball = require('../../assets/images/basketball.svg');

export default function EventDetail() {
    const navigation = useNavigation<EventDetailScreenProps>();
    const route = useRoute<RouteProp<EventDetailScreenProps>>();
    const activity = route.params as Activity;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: activity.title,
        });
    }, [navigation, activity]);

    return (
        <View style={tw`flex flex-col w-full h-full bg-white`}>
            <View style={tw`w-full flex-1`}>
                <Image
                    source={basketball}
                    style={tw`w-full h-full rounded-bl-3xl rounded-br-3xl`}
                    contentFit="cover" />
            </View>
            <View style={tw`flex flex-col h-4/7 p-4 pb-24`}>
                <Text style={tw`text-lg font-semibold text-[#464646]`}>
                    {activity.title}
                </Text>
                <EventDetailBar activity={activity} />
            </View>
        </View>
    )
}

export function EventDescription({ description }: Activity) {
    const [showAllLines, setShowAllLines] = useState<boolean>(false);

    const numLines = 4;

    const toggleShowAllLines = () => {
        setShowAllLines(!showAllLines);
    }

    return (
        <View style={tw`flex w-full h-full bg-white gap-2`}>
            <Text
                style={tw`text-[#8A8A9D] leading-5`}
                numberOfLines={!showAllLines && numLines || undefined}>
                {description}
            </Text>
            {
                /** 
                 * Personally, I don't like the fact that it is always displayed but react-native's onTextLayout event is broken
                 * so there's nothing much we can do on this end. Can perhaps do some magic based on number of words though.
                 */
                <TouchableOpacity
                    activeOpacity={1}
                    accessibilityRole="button"
                    accessibilityLabel={showAllLines && "Show less" || "Show more"}
                    onPress={toggleShowAllLines}>
                    <Text style={tw`text-[#3A63E0] font-semibold`}>
                        {showAllLines && "Show less" || "Show more"}
                    </Text>
                </TouchableOpacity>
            }
        </View>

    )
}

export function EventMeta(props: Activity) {
    const formatDate = (date: Date) => {
        const formattedDate = date.toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });

        return formattedDate
    }

    const formatTime = (date: Date) => {
        const formattedTime = date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });

        return formattedTime
    }

    return (
        <View style={tw`flex w-full h-full bg-white gap-4`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Location: </Text>
                <Text style={tw`text-[#8A8A9D]`}>{props.location}</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Date: </Text>
                <Text style={tw`text-[#8A8A9D]`}>{formatDate(props.dateTime)}</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Time: </Text>
                <Text style={tw`text-[#8A8A9D]`}>{formatTime(props.dateTime)}</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Max. participans: </Text>
                <Text style={tw`text-[#8A8A9D]`}>{props.numParticipants}</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Current headcount: </Text>
                <Text style={tw`text-[#8A8A9D]`}>
                    {`${props.maxParticipants - props.numParticipants}/${props.maxParticipants}`}
                </Text>
            </View>
        </View >
    )
}
