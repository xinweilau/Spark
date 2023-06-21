import { Image } from "expo-image"
import { Text, TouchableWithoutFeedback, View } from "react-native"
import tw from "twrnc"
import { ActivityCategory } from "../types/Activity"
import { useNavigation } from "@react-navigation/native"

const basketball = require("../../assets/images/basketball.svg")

export default function SubCategoryItem(props: ActivityCategory) {
    /** The useNavigation hook is not type safe so we should be careful here */
    const navigation = useNavigation<EventCategoryScreenProps>();

    const handlePress = () => {
        navigation.navigate('SubCategoryActivity', props)
    }

    return (
        <View style={tw`flex flex-col gap-4 w-75 h-3/4 p-4`}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={tw`w-full h-full shadow-lg rounded-3xl`}>
                    <Image
                        source={basketball}
                        style={tw`w-full h-full rounded-3xl`}
                        contentFit="cover"
                    />
                </View>
            </TouchableWithoutFeedback>
            <Text style={tw`font-bold text-xl text-[#464646]`}>
                {props.name}
            </Text>
        </View >
    )
}