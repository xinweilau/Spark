import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc'

export default function NavElement({ state, descriptors, navigation }: any) {
    return (
        <View style={tw`absolute flex flex-row rounded-[40px] p-2 bottom-5 left-5 right-5 bg-white z-50 shadow-lg`}>
            {
                state.routes.map((route: any, index: any) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const icon = () => {
                        switch (route.name) {
                            case 'Home':
                                return <Ionicons name="home-outline" size={24} color={isFocused ? '#F2F4F5' : '#4D4D4D'} />;
                            case 'Leaderboard':
                                return <Ionicons name="trophy-outline" size={24} color={isFocused ? '#F2F4F5' : '#4D4D4D'} />;
                            case 'Calendar':
                                return <Ionicons name="calendar-outline" size={24} color={isFocused ? '#F2F4F5' : '#4D4D4D'} />;
                            case 'Settings':
                                return <Ionicons name="settings-outline" size={24} color={isFocused ? '#F2F4F5' : '#4D4D4D'} />;
                            default:
                                return <Ionicons name="home-outline" size={24} color={isFocused ? '#F2F4F5' : '#4D4D4D'} />;
                        }
                    }

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            activeOpacity={1}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={tw.style('flex-1', isFocused && 'grow-2')}
                        >
                            <View style={tw`flex flex-row items-stretch h-full`}>
                                <View style={tw.style(
                                    'flex flex-row flex-nowrap gap-2 rounded-full py-2 w-full justify-center',
                                    isFocused && 'bg-[#303437]'
                                )}>
                                    {icon()}
                                    {isFocused &&
                                        <Text style={tw`self-center text-white font-bold`} numberOfLines={1} >
                                            {label}
                                        </Text>
                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                })
            }
        </View >
    );
}
