import { Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc"
import { Metric } from "../types/Metric";

export default function MetricItem(props: Metric) {
    const getIconType = (metricType: string) => {
        switch (metricType) {
            case 'time':
                return 'alarm-outline'
            case 'fitness':
                return 'barbell-outline'
        }
    }

    return (
        <View style={tw`flex flex-col gap-8 rounded-3xl bg-white w-36 p-5 justify-between shadow-md`}>
            <Text>
                <Ionicons
                    name={getIconType(props.type)}
                    size={18}
                    color='#0070F0'
                    style={tw`rounded-full bg-[#F2F8FF] p-2`} />
            </Text>
            <View>
                <Text style={tw`font-semibold`}>
                    {props.value}
                </Text>
                <Text style={tw`text-[#72777A] text-xs`}>
                    {props.title}
                </Text>
            </View>
        </View>
    )
}
