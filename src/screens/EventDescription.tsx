import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View } from "react-native";
import tw from "twrnc"

export default function EventDescription() {
    const navigation = useNavigation<EventDescriptionScreenProps>();
    const route = useRoute<RouteProp<EventDescriptionScreenProps>>();
    const { id, title } = route.params as EventDescriptionParams;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: title,
        });
    }, [navigation, title]);

    return (
        <View style={tw`w-full h-full bg-white`}>
            {`${id}: ${title}`}
        </View>
    )
}

interface EventDescriptionParams {
    id: number;
    title: string;
}
