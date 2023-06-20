import { FlatList, Text, View } from "react-native"
import tw from "twrnc"
import EventCategoryBar from "../navigation/EventCategoryBar"
import ActivityCategoryCard from "../components/ActivityCategoryCard"
import { ActivityCategory } from "../types/Activity"

export default function EventCategory() {
    return (
        <View style={tw`flex flex-col w-full h-full bg-white px-4 pb-24`}>
            <Text style={tw`font-bold text-2xl`}>Sports</Text>
            <View style={tw`flex flex-1`}>
                { /** FAKE ID to be populated */}
                <EventCategoryBar id="1" />
            </View>

        </View >
    )
}

export function Sample() {
    return <View style={tw`h-full`}>Hi</View>
}

const FAKE_SPORTS_CATEGORY = [
    {
        id: '1',
        name: 'Basketball',
    },
    {
        id: '2',
        name: 'Soccer',
    }
]

const FAKE_LIKED_SPORTS_CATEGORY = [
    {
        id: '2',
        name: 'Soccer',
    }
]

/**
 * A mutable component that displays a list of activities (based on the category's ID)
 * Optionally takes in a boolean of whether to display only what the user has liked
 */
export function CategoryActivity({ id, liked }: { id: string, liked?: boolean }) {
    // Currently, ID is not used. Future implementation will use ID to fetch data from the backend.
    return (
        <View style={tw`bg-white h-full w-full`}>
            <FlatList
                horizontal={true}
                data={liked ? FAKE_LIKED_SPORTS_CATEGORY : FAKE_SPORTS_CATEGORY}
                renderItem={({ item }: { item: ActivityCategory }) => <ActivityCategoryCard {...item} />}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={tw`w-4`} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
