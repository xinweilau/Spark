import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc"

export default function EventDetailTabBar({ state, descriptors, navigation }: any) {
    return (
        <View style={tw`flex flex-row gap-4 item-stretch`}>
            {
                state.routes.map((route: any, index: any) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name
                    const isFocused = state.index === index;

                    const onPress = () => {
                        navigation.dispatch({
                            type: 'NAVIGATE',
                            payload: {
                                name: state.routes[index].name,
                            },
                        });
                    }

                    return (
                        <TouchableOpacity
                            activeOpacity={1}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}>
                            <View style={tw`flex flex-col flex-nowrap gap-2 py-4 items-center`}>
                                <Text
                                    style={tw.style(
                                        'uppercase font-bold text-[#464646]',
                                        !isFocused && 'text-[#8A8A9D]',
                                    )}>
                                    {label}
                                </Text>
                                {isFocused && <View style={tw`h-1 rounded-full w-1/2 bg-[#3A63E0]`}></View>}
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}