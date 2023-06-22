import { FlatList, ScrollView, View } from "react-native";
import tw from "twrnc"
import ActivityItem from "../components/ActivityItem";
import { ACTIVITY_DATA } from "../utils/mock";
import { Activity } from "../types/Activity";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

/**
 * This component needs to be modified with an ID which will be used to fetch the activities under it
 */
export default function SubCategoryActivity() {
    const navigation = useNavigation<EventDetailScreenProps>();
    const route = useRoute<RouteProp<EventDetailScreenProps>>();
    const activity = route.params as Activity;

    console.log(activity);

    return (
        <ScrollView style={tw`w-full h-full px-8 pb-24 bg-white`}>
            <FlatList
                horizontal={false}
                data={ACTIVITY_DATA}
                renderItem={({ item }) => <ActivityItem {...item} />}
                ItemSeparatorComponent={() => <View style={tw`h-4`} />}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    )
}
