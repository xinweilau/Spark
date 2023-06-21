import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import EventDetailBar from "../navigation/EventDetailBar";
import { Activity } from "../types/Activity";
import { Button, Dialog, Portal } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc"
import { formatDate, formatTime } from "../utils/dateTime";


const basketball = require('../../assets/images/basketball.svg');

export default function EventDetail() {
    const navigation = useNavigation<EventDetailScreenProps>();
    const route = useRoute<RouteProp<EventDetailScreenProps>>();
    const activity = route.params as Activity;

    const [userJoinedEvent, setUserJoinedEvent] = useState<boolean>(false);
    const [isConfirmDialogVisible, setIsConfirmDialogVisible] = useState<boolean>(false);

    const toggleConfirmDialogVisible = () => {
        setIsConfirmDialogVisible(!isConfirmDialogVisible);
    }

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

                <View style={tw`flex flex-row flex-nowrap justify-between`}>
                    <Text style={tw`text-lg font-semibold text-[#464646]`}>
                        {activity.title}
                    </Text>
                    <Button mode="contained" buttonColor="#303437" onPress={toggleConfirmDialogVisible}>
                        {userJoinedEvent ? "Join" : "Leave"}
                    </Button>
                </View>
                <EventDetailBar activity={activity} />
            </View>


            <Portal>
                <Dialog visible={isConfirmDialogVisible} onDismiss={toggleConfirmDialogVisible}>
                    <Dialog.Title>{activity.title}</Dialog.Title>
                    <Dialog.Content>
                        <View style={tw`flex flex-col gap-2`}>
                            <Text style={tw`font-semibold`}>
                                {activity.category.name}
                            </Text>
                            <Text>
                                <Ionicons name="time-outline" size={24} color="#7B6F72" />

                            </Text>
                        </View>
                    </Dialog.Content>
                </Dialog>
            </Portal>
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
