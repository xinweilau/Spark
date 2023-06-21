import { FlatList, Text, View } from "react-native"
import tw from "twrnc"
import SubCategoryBar from "../navigation/SubCategoryBar"
import SubCategoryItem from "../components/SubCategoryItem"
import { ActivityCategory } from "../types/Activity"
import { SUBCATEGORY_LIKED, SUBCATEGORY_SPORTS } from "../utils/mock"

export default function SubCategory() {
    return (
        <View style={tw`flex flex-col w-full h-full bg-white px-4 pb-24`}>
            <Text style={tw`font-bold text-2xl`}>Sports</Text>
            <View style={tw`flex flex-1`}>
                { /** FAKE ID to be populated */}
                <SubCategoryBar id="1" />
            </View>

        </View >
    )
}

/**
 * A mutable component that displays a list of activities (based on the category's ID)
 * Optionally takes in a boolean of whether to display only what the user has liked
 */
export function SubCategoryList({ id, liked }: { id: string, liked?: boolean }) {
    // Currently, ID is not used. Future implementation will use ID to fetch data from the backend.
    return (
        <View style={tw`bg-white h-full w-full`}>
            <FlatList
                horizontal={true}
                data={liked ? SUBCATEGORY_LIKED : SUBCATEGORY_SPORTS}
                renderItem={({ item }: { item: ActivityCategory }) => <SubCategoryItem {...item} />}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={tw`w-4`} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
