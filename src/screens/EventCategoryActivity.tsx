import { FlatList, ScrollView, Text, View } from "react-native";
import { Activity } from "../types/Activity";
import tw from "twrnc"
import ActivityItem from "../components/ActivityItem";

// TODO: Replace this with real data
const FAKE_ACTIVITIES_DATA: Activity[] = [
    {
        id: '1',
        title: 'Spin Class',
        category: {
            id: '1',
            name: 'FITNESS',
        },
        dateTime: new Date(),
        location: 'R1OT',
        description: 'A spin class is a high-intensity cycling workout that generally takes place on a stationary machine with a heavy, weighted flywheel that is linked to the pedals.',
        numParticipants: 1,
        maxParticipants: 10,
    },
    {
        id: '2',
        title: 'Hot Yoga',
        category: {
            id: '2',
            name: 'WELLNESS',
        },
        dateTime: new Date(),
        location: 'Fitness First Clementi',
        description: 'Hot yoga is a vigorous form of yoga performed in a studio that is heated to 105 F (40 C) and has a humidity of 40 percent. The formal name for hot yoga is Bikram yoga.',
        numParticipants: 0,
        maxParticipants: 10,
    },
    {
        id: '3',
        title: 'IPPT Training',
        category: {
            id: '1',
            name: 'FITNESS',
        },
        dateTime: new Date(),
        location: 'Sungei Gedong Camp',
        description: 'The Individual Physical Proficiency Test (IPPT) is a standard physical fitness test used by the Singapore Armed Forces (SAF), Singapore Civil Defence Force (SCDF), and Singapore Police Force (SPF) to test the basic components of physical fitness.',
        numParticipants: 5,
        maxParticipants: 10,
    },
    {
        id: '1',
        title: 'Spin Class',
        category: {
            id: '1',
            name: 'FITNESS',
        },
        dateTime: new Date(),
        location: 'R1OT',
        description: 'A spin class is a high-intensity cycling workout that generally takes place on a stationary machine with a heavy, weighted flywheel that is linked to the pedals.',
        numParticipants: 1,
        maxParticipants: 10,
    },
    {
        id: '1',
        title: 'Spin Class',
        category: {
            id: '1',
            name: 'FITNESS',
        },
        dateTime: new Date(),
        location: 'R1OT',
        description: 'A spin class is a high-intensity cycling workout that generally takes place on a stationary machine with a heavy, weighted flywheel that is linked to the pedals.',
        numParticipants: 1,
        maxParticipants: 10,
    },
]

/**
 * This component needs to be modified with an ID which will be used to fetch the activities under it
 */
export default function EventCategoryActivity() {
    return (
        <ScrollView style={tw`w-full h-full px-8 pb-24 bg-white`}>
            <FlatList
                horizontal={false}
                data={FAKE_ACTIVITIES_DATA}
                renderItem={({ item }) => <ActivityItem {...item} />}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={tw`h-4`} />}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    )
}
