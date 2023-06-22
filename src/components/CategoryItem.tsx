import { Image } from "expo-image"
import { Platform, Text, TouchableWithoutFeedback, View } from "react-native"
import tw from "twrnc"
import { CATEGORY_BACKDROP } from "../utils/images";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../utils/useAuth";

export default function CategoryItem({ category }: { category: string }) {
    /** The useNavigation hook is not type safe so we should be careful here */
    const navigation = useNavigation<HomeScreenProps>();
    const { selectCategory } = useAuth();

    const getImage = (category: string) => {
        const imgName = category.toLowerCase();
        return CATEGORY_BACKDROP[imgName];
    }

    const handlePress = () => {
        selectCategory(category)
        navigation.navigate('SubCategory')
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={tw`aspect-square bg-[#F0F0FF] rounded-3xl p-4 shadow-sm relative bg-opacity-80`}>
                <Image
                    source={getImage(category)}
                    style={tw`w-28 h-full rounded-3xl`}
                    contentFit="fill"
                />
                <View style={
                    tw.style(
                        'absolute rounded-3xl w-full h-full left-4 top-4 bg-white bg-opacity-20 flex flex-row justify-center items-center',
                        Platform.OS === 'web' && tw`left-0 top-0`
                    )}>
                    <Text style={tw`text-lg font-semibold`}>
                        {category}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
