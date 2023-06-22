import { FlatList, ScrollView, View } from "react-native";
import tw from "twrnc"
import ActivityItem from "../components/ActivityItem";
import { ACTIVITY_DATA } from "../utils/mock";
import { Activity } from "../types/Activity";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getActivitySubCategory } from "../services/Activity";
import { useState } from "react";

/**
 * This component needs to be modified with an ID which will be used to fetch the activities under it
 */
export default function SubCategoryActivity() {
    const navigation = useNavigation<EventDetailScreenProps>();
    const route = useRoute<RouteProp<EventDetailScreenProps>>();
    const subcat = route.params as string;

    const [subCatList, setSubCatList] = useState<Activity[]>([]);


    useQuery({
        queryKey: ['subCategoryActivities', subcat],
        queryFn: () => getActivitySubCategory(subcat),
        onSuccess: ({ data }: { data: { result: Activity[] } }) => {
            setSubCatList(
                data.result.map((data: any): Activity => {
                    return {
                        id: data.id,
                        title: data.title,
                        description: data.description,
                        category: data.category,
                        subCategory: data.subcategory,
                        location: data.location,
                        startTime: new Date(data.starttime),
                        endTime: new Date(data.endtime),
                        maxParticipants: data.maxparticipants,
                    }
                })
            );
        },
        retry: false,
    })

    return (
        <ScrollView style={tw`w-full h-full px-8 pb-24 bg-white`}>
            <FlatList
                horizontal={false}
                data={subCatList}
                renderItem={({ item }) => <ActivityItem {...item} />}
                ItemSeparatorComponent={() => <View style={tw`h-4`} />}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    )
}
