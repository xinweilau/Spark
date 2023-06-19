import { Text, View } from "react-native"
import tw from "twrnc"
import { Metric } from "../types/Metric";
import { IconButton } from "react-native-paper";

export default function MetricItem(props: Metric) {
    const getIconType = (metricType: string) => {
        switch (metricType) {
            case 'time':
                return 'alarm'
            case 'fitness':
                return 'dumbbell'
            default:
                return 'help'
        }
    }

    return (
        /** Slight offset of m-1 in order for the effects of shadow to be seen */
        <View style={tw`flex flex-col gap-8 rounded-3xl bg-white w-36 p-2 justify-between shadow-md m-1`}>
            <IconButton
                icon={getIconType(props.type)}
                mode="contained-tonal"
                size={18}
                iconColor='#0070F0'
                rippleColor="transparent"
                containerColor="#F2F8FF" />

            { /** CSS trick: aggregated padding */}
            <View style={tw`pl-2 pb-2`}>
                <Text style={tw`font-semibold`}>
                    {props.value}
                </Text>
                <Text style={tw`text-[#72777A] text-xs`}>
                    {props.title}
                </Text>
            </View>
        </View >
    )
}
