import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import tw from 'twrnc';
import Tag from "../components/Tag";
import { Ionicons } from '@expo/vector-icons';
import { Activity } from '../types/Activity';
import { ACTIVITY_DATA } from '../utils/mock';
import ActivityItem from '../components/ActivityItem';
import { getUserRegisteredActivity } from '../services/User';
import { useQuery } from '@tanstack/react-query';

const timeToString = (time: any) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export default function Calendar() {
  const [items, setItems] = useState({});
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    if (activities.length > 0) {
      const items: any = {}
      activities.forEach((activity: Activity) => {
        const date = timeToString(activity.startTime)
        if (items[date] === undefined) {
          items[date] = []
        }
        items[date].push(activity)
      })

      setItems(items)
    }
  }, [activities])

  const formatDate = (date: Date) => {
    const formattedDate = date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    return formattedDate
  }


  const { refetch } = useQuery({
    queryKey: ['registeredActivities', 1],
    queryFn: () => getUserRegisteredActivity("1"),
    onSuccess: ({ data }: any) => {
      const registeredActivities: Activity[] = data.result.map((data: any): Activity => {
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

      setActivities(registeredActivities)
    },
    retry: false,
  })

  const loadItems = (day: any) => {
    refetch();
  };

  const renderItem = (item: any) => {
    // const getActivityObject = (item: any): Activity => {
    //     // for (let i = 0; i < 5; i++) {}
    //     return ACTIVITY_DATA[0]
    // }

    // return (
    //   <View style={tw`pb-4`}>
    //     <ActivityItem {...getActivityObject(item)}/>
    //   </View>
    // );
    return (

      // <TouchableWithoutFeedback onPress={handlePress}>
      <View style={tw`pb-2 py-3`}>
        <TouchableWithoutFeedback>
          <View style={tw`flex flex-col gap-8 rounded-3xl bg-[#F0F0FF] p-5 justify-between shadow-sm`}>
            <View style={tw`flex flex-col gap-2`}>
              <View style={tw`flex flex-row flex-nowrap items-center justify-between`}>
                <Text style={tw`text-base font-semibold`}>{item.title}</Text>
                <Tag>{item.category}</Tag>
              </View>

              <Text style={tw`text-xs text-[#404446]`}>
                {formatDate(item.startTime)}
              </Text>
            </View>

            <View style={tw`flex flex-row items-center gap-1`}>
              <Ionicons name="location" size={18} color='#404446' />
              <Text style={tw`text-xs text-[#404446]`}>{item.location}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>

    )
  };

  return (
    <View style={{ flex: 1, paddingTop: 34, }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
