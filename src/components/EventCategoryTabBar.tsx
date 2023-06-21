import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc"

export default function EventCategoryTabBar({ state, descriptors, navigation }: any) {
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
                            <View style={tw`flex flex-col flex-nowrap gap-2 pt-4 pb-2 px-1 items-center`}>
                                <Text
                                    style={tw.style(
                                        'uppercase text-[#464646] w-full',
                                        !isFocused && 'text-[#8A8A9D]',
                                    )}>
                                    {label}
                                </Text>
                                {isFocused && <View style={tw`h-px rounded-full w-[120%] bg-[#464646]`}></View>}
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
