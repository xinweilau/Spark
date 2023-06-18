import { Image } from "expo-image"
import { Text, View } from "react-native"
import tw from "twrnc"
import { ActivityCategory } from "../types/Activity";

export default function CategoryItem(props: ActivityCategory) {
    const getImage = (category: string) => {
        const imgName = category.toLowerCase();
        return require(`../../assets/images/${imgName}.svg`)
    }

    return (
        <View style={tw`aspect-square bg-[#F0F0FF] rounded-3xl p-4 shadow-sm relative`}>
            <Image
                source={getImage(props.name)}
                style={tw`w-28 h-full rounded-3xl`}
                contentFit="fill"
            />
            <View style={tw`absolute rounded-3xl -left-0 -top-0 w-full h-full bg-white bg-opacity-30 flex flex-row justify-center items-center`}>
                <Text style={tw`text-lg font-semibold`}>
                    {props.name}
                </Text>
            </View>
        </View>
    )
}
