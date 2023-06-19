import { Text, View } from "react-native";
import tw from "twrnc";
import Tag from "./Tag";
import { Ionicons } from '@expo/vector-icons';
import { Activity } from "../types/Activity";

export default function ActivityItem(props: Activity) {
    const formatDate = (date: Date) => {
        const formattedDate = date.toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });

        return formattedDate
    }

    return (
        <View style={tw`flex flex-col gap-8 rounded-3xl bg-[#F0F0FF] p-5 justify-between shadow-sm`}>
            <View style={tw`flex flex-col gap-2`}>
                <View style={tw`flex flex-row flex-nowrap items-center justify-between`}>
                    <Text style={tw`text-base font-semibold`}>{props.title}</Text>
                    <Tag>{props.category.name}</Tag>
                </View>

                <Text style={tw`text-xs text-[#404446]`}>
                    {formatDate(props.dateTime)}
                </Text>
            </View>

            <View style={tw`flex flex-row items-center gap-1`}>
                <Ionicons name="location" size={18} color='#404446' />
                <Text style={tw`text-xs text-[#404446]`}>{props.location}</Text>
            </View>
        </View>
    )
}
