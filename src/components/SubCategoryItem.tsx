import { Image } from "expo-image"
import { Text, TouchableWithoutFeedback, View } from "react-native"
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native"
import { CATEGORY_BACKDROP } from "../utils/images"

const basketball = require("../../assets/images/basketball.svg")

export default function SubCategoryItem({ category }: { category: string }) {
    /** The useNavigation hook is not type safe so we should be careful here */
    const navigation = useNavigation<EventCategoryScreenProps>();

    const handlePress = () => {
        navigation.navigate('SubCategoryActivity', category)
    }

    const getBackdropImage = () => {
        const imgName = category.toLowerCase().replace(" ", "");
        return CATEGORY_BACKDROP[imgName];
    }

    return (
        <View style={tw`flex flex-col gap-4 w-75 h-3/4 p-4`}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={tw`w-full h-full shadow-lg rounded-3xl`}>
                    <Image
                        source={getBackdropImage()}
                        style={tw`w-full h-full rounded-3xl`}
                        contentFit="cover"
                    />
                </View>
            </TouchableWithoutFeedback>
            <Text style={tw`font-bold text-xl text-[#464646]`}>
                {category}
            </Text>
        </View >
    )
}