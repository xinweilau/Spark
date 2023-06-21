import { FlatList, Text, View, ScrollView, SafeAreaView } from 'react-native';
import tw from 'twrnc';
import { Button, Dialog, IconButton, PaperProvider, Portal } from 'react-native-paper';
import ActivityItem from '../components/ActivityItem';
import CategoryItem from '../components/CategoryItem';
import MetricItem from '../components/MetricItem';
import GradientButton from '../components/GradientButton';
import { useState } from 'react';
import { ACTIVITY_DATA, CATEGORY_DATA, OVERVIEW_DATA } from '../utils/mock';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { getAllActivity } from '../services/Activity';
import { Activity } from '../types/Activity';

export default function Home() {
    /** The useNavigation hook is not type safe so we should be careful here */
    const navigation = useNavigation<HomeScreenProps>();
    const [activity, setActivity] = useState<Activity[]>([]);

    const [pointsDialogVisible, setPointsDialogVisible] = useState(false);

    const togglePointsDialog = () => {
        setPointsDialogVisible(!pointsDialogVisible);
    }

    useQuery({
        queryKey: ['getAllActivity'],
        queryFn: () => getAllActivity(),
        onSuccess: ({ data }) => {
            const { result } = data;
            setActivity(
                result.map((data: any): Activity => {
                    return {
                        id: data.id,
                        title: data.title,
                        description: data.description,
                        category: data.category,
                        subCategory: data.subcategory,
                        location: data.location,
                        startTime: new Date(data.starttime),
                        endTime: new Date(data.endtime),
                        maxParticipants: data.maxparticipants,
                    }
                })
            );
        },
        retry: false,
    })

    return (
        <PaperProvider>
            <ScrollView style={tw`h-full w-full bg-white px-8 pt-8`}>
                <View style={tw`flex flex-col gap-4 pb-30`}>
                    <View>
                        <View style={tw`flex flex-row flex-nowrap items-center justify-between pt-4`}>
                            <Text style={tw`text-2xl font-bold`}>Home</Text>
                            <IconButton
                                icon="information-outline"
                                size={30}
                                iconColor='#B7B7B7'
                                onPress={togglePointsDialog} />
                        </View>
                    </View>

                    <Button
                        icon="plus"
                        mode="contained"
                        onPress={() => navigation.navigate('CreateActivity')}
                        buttonColor="#F0F0FF"
                        textColor='black'
                        style={tw`rounded-xl`}>
                        Create Activity
                    </Button>

                    <View style={tw`flex flex-col gap-4 justify-center`}>
                        <Text style={tw`text-base font-medium`}>Top Activities</Text>
                        <FlatList
                            horizontal={true}
                            data={activity}
                            renderItem={({ item }) => <ActivityItem {...item} />}
                            ItemSeparatorComponent={() => <View style={tw`w-4`} />}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <View style={tw`flex flex-col gap-4 justify-center`}>
                        <Text style={tw`text-base font-medium`}>Overview</Text>
                        <FlatList
                            horizontal={true}
                            data={OVERVIEW_DATA}
                            renderItem={({ item }) => <MetricItem {...item} />}
                            ItemSeparatorComponent={() => <View style={tw`w-4`} />}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <View style={tw`flex flex-col gap-4 justify-center`}>
                        <Text style={tw`text-base font-medium`}>Categories</Text>

                        <FlatList
                            horizontal={true}
                            data={Object.keys(CATEGORY_DATA)}
                            renderItem={({ item }) => <CategoryItem category={item} />}
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
                        <View style={tw`flex flex-col gap-4 items-center`}>

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
