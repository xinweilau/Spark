import { Image } from "expo-image"
import { Platform, Text, View } from "react-native"
import tw from "twrnc"
import { ActivityCategory } from "../types/Activity";
import { CATEGORY_BACKDROP } from "../utils/images";

export default function CategoryItem(props: ActivityCategory) {
    const getImage = (category: string) => {
        const imgName = category.toLowerCase();
        return CATEGORY_BACKDROP[imgName];
    }

    return (
        <View style={tw`aspect-square bg-[#F0F0FF] rounded-3xl p-4 shadow-sm relative bg-opacity-80`}>
            <Image
                source={getImage(props.name)}
                style={tw`w-28 h-full rounded-3xl`}
                contentFit="fill"
            />
            <View style={
                tw.style(
                    'absolute rounded-3xl w-full h-full left-4 top-4 bg-white bg-opacity-20 flex flex-row justify-center items-center',
                    Platform.OS === 'web' && tw`left-0 top-0`
                )}>
                <Text style={tw`text-lg font-semibold`}>
                    {props.name}
                </Text>
            </View>
        </View>
    )
}
