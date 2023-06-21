import { FlatList, ScrollView, Text, View } from "react-native";
import tw from "twrnc"
import ActivityItem from "../components/ActivityItem";
import { ACTIVITY_DATA } from "../utils/mock";

/**
 * This component needs to be modified with an ID which will be used to fetch the activities under it
 */
export default function EventCategoryActivity() {
    return (
        <ScrollView style={tw`w-full h-full px-8 pb-24 bg-white`}>
            <FlatList
                horizontal={false}
                data={ACTIVITY_DATA}
                renderItem={({ item }) => <ActivityItem {...item} />}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={tw`h-4`} />}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    )
}
