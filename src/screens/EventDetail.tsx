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
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUsersInActivity, joinActivity, leaveActivity } from "../services/Activity";
import { User } from "../types/User";

const basketball = require('../../assets/images/basketball.svg');

export default function EventDetail() {
    const [users, setUsers] = useState<User[]>([]);
    const navigation = useNavigation<EventDetailScreenProps>();
    const route = useRoute<RouteProp<EventDetailScreenProps>>();
    const activity = route.params as Activity;

    const [userJoinedEvent, setUserJoinedEvent] = useState<boolean>(false);
    const [isConfirmDialogVisible, setIsConfirmDialogVisible] = useState<boolean>(false);
    const [isUserJoining, setIsUserJoining] = useState<boolean>(false);

    const toggleConfirmDialogVisible = () => {
        setIsConfirmDialogVisible(!isConfirmDialogVisible);
    }

    const handleUserJoinEvent = () => {
        setIsUserJoining(true);
        setIsConfirmDialogVisible(false);
        userJoinActivity({ activityId: activity.id!, userId: "1" });
        refetch();
    }

    const handleLeaveEvent = () => {
        setIsUserJoining(true);
        userLeaveActivity({ activityId: activity.id!, userId: "1" });
    }

    const { refetch } = useQuery({
        queryKey: ['eventMeta', activity.id],
        queryFn: () => getUsersInActivity(activity.id!),
        onSuccess: ({ data }: { data: { result: User[] } }) => {
            data.result.forEach((user: User) => {
                if (user.id! === 1) {
                    setUserJoinedEvent(true);
                }
            });

            setUsers(data.result);
        },
        retry: false,
    })

    const { mutate: userJoinActivity } = useMutation({
        mutationFn: (data: { activityId: string, userId: string }) => joinActivity(data.activityId, data.userId),
        onSuccess: () => {
            setIsUserJoining(false);
            setUserJoinedEvent(!userJoinedEvent);
        }
    })

    const { mutate: userLeaveActivity } = useMutation({
        mutationFn: (data: { activityId: string, userId: string }) => leaveActivity(data.activityId, data.userId),
        onSuccess: () => {
            setIsUserJoining(false);
            setUserJoinedEvent(!userJoinedEvent);
        }
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            title: activity.title,
        });
    }, [navigation, activity]);

    return (

        <PaperProvider>
            <View style={tw`flex flex-col w-full h-full bg-white`}>
                <View style={tw`w-full flex-1`}>
                    <Image
                        source={basketball}
                        style={tw`w-full h-full rounded-bl-3xl rounded-br-3xl`}
                        contentFit="cover" />
                </View>
                <View style={tw`flex flex-col h-4/7 p-4 pb-24`}>
                    <View style={tw`flex flex-row flex-nowrap justify-between items-center`}>
                        <Text style={tw`text-lg font-semibold text-[#464646]`}>
                            {activity.title}
                        </Text>
                        <Button
                            mode="contained"
                            buttonColor="#303437"
                            onPress={userJoinedEvent ? toggleConfirmDialogVisible : handleLeaveEvent}
                            loading={isUserJoining}
                            disabled={isUserJoining}
                            textColor="white">
                            {!userJoinedEvent ? "Join" : "Leave"}
                        </Button>
                    </View>
                    <EventDetailBar activity={activity} />
                </View>
            </View>
            <Portal>
                <Dialog
                    visible={isConfirmDialogVisible}
                    onDismiss={toggleConfirmDialogVisible}
                    style={tw`bg-white`}>
                    <Dialog.Title>{activity.title}</Dialog.Title>
                    <Dialog.Content>
                        <View style={tw`flex flex-col gap-4`}>
                            <View>
                                <Text style={tw`font-semibold text-black`}>
                                    {`${activity.category.name} | ${activity.subCategory.name}`}
                                </Text>

                                <View style={tw`flex flex-row gap-1 items-center`}>
                                    <Ionicons name="time-outline" size={16} color="#7B6F72" />
                                    <Text style={tw`font-light`}>
                                        {`${formatDate(activity.startTime)} | ${formatTime(activity.startTime)}`}
                                    </Text>
                                </View>
                            </View>

                            <GradientButton
                                onPress={handleUserJoinEvent}
                                buttonLength={tw`w-full`}
                                buttonStyle={tw`rounded-full w-full shadow-lg p-4`}
                                textStyle={tw`font-bold`}
                                colors={['#9DCEFF', '#92A3FD']}
                                locations={[0.5, 1]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 0.5, y: 0 }}>
                                CONFIRM
                            </GradientButton>
                        </View>
                    </Dialog.Content>
                </Dialog>
            </Portal>
        </PaperProvider>
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
    const [users, setUsers] = useState<User[]>([]);

    useQuery({
        queryKey: ['eventMeta', props.id],
        queryFn: () => getUsersInActivity(props.id!),
        onSuccess: ({ data }: { data: { result: User[] } }) => {
            setUsers(data.result);
        }
    })

    return (
        <View style={tw`flex w-full h-full bg-white gap-4`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Location: </Text>
                <Text style={tw`text-[#8A8A9D]`}>{props.location}</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Date: </Text>
                <Text style={tw`text-[#8A8A9D]`}>{formatDate(props.startTime)}</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Time: </Text>
                <Text style={tw`text-[#8A8A9D]`}>{formatTime(props.startTime)}</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Max. participans: </Text>
                <Text style={tw`text-[#8A8A9D]`}>{props.maxParticipants}</Text>
            </View>

            <View style={tw`flex flex-row`}>
                <Text style={tw`font-semibold text-[#62626F]`}>Current headcount: </Text>
                <Text style={tw`text-[#8A8A9D]`}>
                    {`${users.length}`}
                </Text>
            </View>
        </View >
    )
}
