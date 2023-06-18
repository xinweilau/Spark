import { Text, View } from "react-native";
import tw from "twrnc"

/**
 * Tag is a custom component used to represent a Tag UI element.
 * Created with View and styled with Tailwindcss.
 */
export default function Tag({ children }: TagProps) {
    return (
        <View style={tw`bg-white rounded-full py-1 px-2`}>
            <Text style={tw`capitalize text-xs text-[#5555CB] `}>
                {children}
            </Text>
        </View>
    )
}

interface TagProps {
    children?: React.ReactNode;
}
