import { FlatList, Text, View, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Dialog, IconButton, PaperProvider, Portal } from 'react-native-paper';
import ActivityItem from '../components/ActivityItem';
import { Activity, ActivityCategory } from '../types/Activity';
import CategoryItem from '../components/CategoryItem';
import MetricItem from '../components/MetricItem';
import { Metric } from '../types/Metric';
import GradientButton from '../components/GradientButton';
import { useState } from 'react';

// TODO: Replace this with real data
const FAKE_ACTIVITIES_DATA: Activity[] = [
    {
        id: '1',
        title: 'Spin Class',
        category: {
            id: '1',
            name: 'FITNESS',
        },
        dateTime: new Date(),
        location: 'R1OT',
    },
    {
        id: '2',
        title: 'Hot Yoga',
        category: {
            id: '2',
            name: 'WELLNESS',
        },
        dateTime: new Date(),
        location: 'Fitness First Clementi',
    },
    {
        id: '3',
        title: 'IPPT Training',
        category: {
            id: '1',
            name: 'FITNESS',
        },
        dateTime: new Date(),
        location: 'Sungei Gedong Camp',
    }
]

// TODO: Replace this with real data
const FAKE_CATEGORIES_DATA: ActivityCategory[] = [
    {
        id: '1',
        name: 'Sports',
    }
]

// TODO: Replace this with real data
const FAKE_OVERVIEW_DATA: Metric[] = [
    {
        title: 'Total Time',
        value: '3hr',
        type: 'time',
    },
    {
        title: 'Total Activities',
        value: '3',
        type: 'fitness',
    }
]

export default function Home() {
    const [pointsDialogVisible, setPointsDialogVisible] = useState(false);

    const togglePointsDialog = () => {
        setPointsDialogVisible(!pointsDialogVisible);
    }

    return (
        <PaperProvider>
            <ScrollView style={tw`h-full w-full bg-white px-8 pt-8 pb-24`}>
                <View style={tw`flex flex-col gap-6 `}>
                    <View>
                        <View style={tw`flex flex-row flex-nowarp items-center justify-between pt-4`}>
                            <Text style={tw`text-2xl font-bold`}>Home</Text>
                            <IconButton
                                icon="information-outline"
                                size={30}
                                iconColor='#B7B7B7'
                                onPress={togglePointsDialog} />
                        </View>
                    </View>

                    <View style={tw`flex flex-col gap-4 justify-center`}>
                        <Text style={tw`text-base font-medium`}>Top Activities</Text>
                        <FlatList
                            horizontal={true}
                            data={FAKE_ACTIVITIES_DATA}
                            renderItem={({ item }) => <ActivityItem {...item} />}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={() => <View style={tw`w-4`} />}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <View style={tw`flex flex-col gap-4 justify-center`}>
                        <Text style={tw`text-base font-medium`}>Categories</Text>

                        <FlatList
                            horizontal={true}
                            data={FAKE_CATEGORIES_DATA}
                            renderItem={({ item }) => <CategoryItem {...item} />}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={() => <View style={tw`w-4`} />}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <View style={tw`flex flex-col gap-4 justify-center`}>
                        <Text style={tw`text-base font-medium`}>Overview</Text>

                        <FlatList
                            horizontal={true}
                            data={FAKE_OVERVIEW_DATA}
                            renderItem={({ item }) => <MetricItem {...item} />}
                            ItemSeparatorComponent={() => <View style={tw`w-4`} />}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>

            <Portal>
                <Dialog
                    visible={pointsDialogVisible}
                    onDismiss={togglePointsDialog}
                    style={tw`bg-white`}>
                    <Dialog.Content>
                        <View style={tw`flex flex-col gap-4 space-between items-center`}>

                            <Text style={tw`font-semibold text-lg`}>Points Information</Text>
                            <View style={tw`text-xs`}>
                                <Text>
                                    With every participation of an event,
                                    every 1 min = 1 point earned.
                                </Text>
                                <Text style={tw`font-light`}>
                                    E.G. 1 HR Event = 60 Points
                                </Text>
                            </View>
                            <GradientButton
                                onPress={togglePointsDialog}
                                buttonLength={tw`w-full`}
                                buttonStyle={tw`rounded-full w-full shadow-lg p-4`}
                                textStyle={tw`font-bold`}
                                colors={['#9DCEFF', '#92A3FD']}
                                locations={[0.5, 1]}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 0.5, y: 0 }}>
                                GOT IT!
                            </GradientButton>
                        </View>
                    </Dialog.Content>
                </Dialog>
            </Portal>
        </PaperProvider>
    );
}
