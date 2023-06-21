import { Image } from "expo-image"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { Avatar, List } from "react-native-paper"
import tw from "twrnc"

// @ts-ignore
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { LEADERBOARD_DATA } from "../utils/mock";
import { useCallback, useEffect, useState } from "react";

const trophy = require("../../assets/images/trophy.svg")

export default function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState<{ name: string, points: number }[]>([])

    useEffect(() => {
        setLeaderboard(() => {
            return LEADERBOARD_DATA.sort((a, b) => b.points - a.points)
        })
    }, []);

    const getTopThree = useCallback(() => {
        if (leaderboard.length) {
            return leaderboard.slice(0, 3)
        }

        return []
    }, [leaderboard])

    return (
        <ParallaxScrollView
            backgroundColor="#F9F9FB"
            parallaxHeaderHeight={425}
            renderForeground={() => (
                <View style={tw`flex flex-col px-4 pb-8 h-full gap-2 pt-20`}>
                    <View style={tw`flex items-center`}>
                        <Text style={tw`font-bold text-2xl`}>Leaderboard</Text>
                    </View>
                    <View style={tw`flex items-center`}>
                        <Image
                            source={trophy}
                            style={tw`w-12 h-12 absolute `}
                            contentFit="contain" />
                    </View>
                    <View style={tw`flex flex-row flex-1 flex-nowrap items-end`}>
                        <View style={tw`flex flex-1 h-1/2 border border-2 rounded-t-[40px] border-[#009BD6] bg-white justify-center items-center`}>
                            <View style={tw`flex items-center justify-center border border-4 border-[#009BD6] rounded-full absolute -top-1/4`}>
                                <Avatar.Image size={60} source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" }} />
                                <View style={{
                                    ...tw`absolute rounded-md w-6 h-6 bg-[#009BD6] -bottom-1/6`,
                                    ...styles.diamond
                                }}>
                                    <Text style={{
                                        ...tw`absolute text-white font-semibold left-1/3 top-1/6`,
                                        ...styles.textInDiamond
                                    }}>2</Text>
                                </View>
                            </View>
                            <View style={tw`flex flex-col gap-2 items-center justify-end h-3/5`}>
                                <Text style={tw`text-base`}>{getTopThree().length > 0 && getTopThree()[1].name}</Text>
                                <Text style={tw`text-base font-bold text-xl text-[#009BD6]`}>{getTopThree().length > 0 && getTopThree()[1].points}</Text>
                            </View>
                        </View>
                        <View style={tw`flex flex-1 h-2/3 border border-2 rounded-t-[40px] border-[#FFAA00] min-w-1/9 bg-white -mx-2 z-1 justify-center items-center`}>
                            <View style={tw`flex items-center justify-center border border-4 border-[#FFAA00] rounded-full absolute -top-1/4`}>
                                <Avatar.Image size={80} source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" }} />

                                <View style={{
                                    ...tw`absolute rounded-md w-6 h-6 bg-[#FFAA00] -bottom-1/7`,
                                    ...styles.diamond
                                }}>
                                    <Text style={{
                                        ...tw`absolute text-white font-semibold left-1/3 top-1/6`,
                                        ...styles.textInDiamond
                                    }}>1</Text>
                                </View>
                            </View>
                            <View style={tw`flex flex-col gap-2 items-center justify-end h-1/3`}>
                                <Text style={tw`text-base`}>{getTopThree().length > 0 && getTopThree()[0].name}</Text>
                                <Text style={tw`text-base font-bold text-xl text-[#FFAA00]`}>{getTopThree().length > 0 && getTopThree()[0].points}</Text>
                            </View>
                        </View>
                        <View style={tw`flex flex-1 h-1/2 border border-2 rounded-t-[40px] border-[#00D95F] bg-white justify-center items-center`}>
                            <View style={tw`flex items-center justify-center border border-4 border-[#00D95F] rounded-full absolute -top-1/4`}>
                                <Avatar.Image size={60} source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" }} />
                                <View style={{
                                    ...tw`absolute rounded-md w-6 h-6 bg-[#00D95F] -bottom-1/6`,
                                    ...styles.diamond
                                }}>
                                    <Text style={{
                                        ...tw`absolute text-white font-semibold left-1/3 top-1/6`,
                                        ...styles.textInDiamond
                                    }}>3</Text>
                                </View>
                            </View>
                            <View style={tw`flex flex-col gap-2 items-center justify-end h-3/5`}>
                                <Text style={tw`text-base`}>{getTopThree().length > 0 && getTopThree()[2].name}</Text>
                                <Text style={tw`text-base font-bold text-xl text-[#00D95F]`}>{getTopThree().length > 0 && getTopThree()[2].points}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
            contentContainerStyle={tw`rounded-t-[40px] bg-white shadow-xl h-full p-4 px-8 pb-20`}>
            <FlatList
                horizontal={false}
                data={LEADERBOARD_DATA}
                renderItem={({ item }) =>
                    <List.Item
                        title={item.name}
                        left={props =>
                            <View style={tw`flex items-center justify-center border border-4 border-[#8053DF] rounded-full`}>
                                <Avatar.Image size={50} source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" }} />
                            </View>
                        }
                        right={props =>
                            <View style={tw`flex justify-center`}>
                                <Text style={tw`font-bold text-xl`}>{item.points}</Text>
                            </View>
                        }
                    />}
                ItemSeparatorComponent={() => <View style={tw`border border-[0.5px]`} />}
                showsHorizontalScrollIndicator={false}
            />
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    diamond: {
        transform: [{ rotate: "45deg" }],
    },
    textInDiamond: {
        transform: [{ rotate: "-45deg" }],
    }
});
