import { FlatList, Text, View } from "react-native"
import tw from "twrnc"
import SubCategoryBar from "../navigation/SubCategoryBar"
import SubCategoryItem from "../components/SubCategoryItem"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { CATEGORY_DATA } from "../utils/mock";
import { useEffect } from "react";
import useAuth from "../utils/useAuth";

export default function SubCategory() {
    const { selectedCategory } = useAuth();

    return (
        <View style={tw`flex flex-col w-full h-full bg-white px-4 pb-24`}>
            <Text style={tw`font-bold text-2xl`}>{selectedCategory}</Text>
            <View style={tw`flex flex-1`}>
                { /** FAKE ID to be populated */}
                <SubCategoryBar />
            </View>

        </View >
    )
}

/**
 * A mutable component that displays a list of activities (based on the category's ID)
 * Optionally takes in a boolean of whether to display only what the user has liked
 */
export function SubCategoryList({ liked }: { liked?: boolean }) {
    // Currently, ID is not used. Future implementation will use ID to fetch data from the backend.
    const { selectedCategory } = useAuth();

    const getSubcategorySports = () => {
        return CATEGORY_DATA[selectedCategory];
    }
    return (
        <View style={tw`bg-white h-full w-full`}>
            <FlatList
                horizontal={true}
                data={getSubcategorySports()}
                renderItem={({ item }) => <SubCategoryItem category={item} />}
                ItemSeparatorComponent={() => <View style={tw`w-4`} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
