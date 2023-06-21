import React, {useState} from 'react';
import {View, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import tw from 'twrnc';
import Tag from "../components/Tag";
import { Ionicons } from '@expo/vector-icons';
import { Activity } from '../types/Activity';
import { ACTIVITY_DATA } from '../utils/mock';
import ActivityItem from '../components/ActivityItem';

const timeToString = (time: any) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

export default function Calendar(){
  const [items, setItems] = useState({});

  const loadItems = (day: any) => {
    setTimeout(() => {
    
    const items:any = {
        "2023-06-21":[
            {id: '1',
            title: 'Spin Class',
            category: 'Fitness',
            dateTime: "2023-06-21",
            location: 'R1OT',
            description: 'A spin class is a high-intensity cycling workout that generally takes place on a stationary machine with a heavy, weighted flywheel that is linked to the pedals.',
            numParticipants: 1,
            maxParticipants: 10,}
           ,{id: '2',
           title: 'Hot Yoga',
           category: 'Fitness',
           dateTime: "2023-06-21",
           location: 'Fitness First Clementi',
           description: 'Hot yoga is a vigorous form of yoga performed in a studio that is heated to 105 F (40 C) and has a humidity of 40 percent. The formal name for hot yoga is Bikram yoga.',
           numParticipants: 0,
           maxParticipants: 10,}
            ],
        "2023-06-23":[
            {id: '3',
            title: 'IPPT Training',
            category: "Fitness",
            dateTime: "2023-06-23",
            location: 'Sungei Gedong Camp',
            description: 'The Individual Physical Proficiency Test (IPPT) is a standard physical fitness test used by the Singapore Armed Forces (SAF), Singapore Civil Defence Force (SCDF), and Singapore Police Force (SPF) to test the basic components of physical fitness.',
            numParticipants: 5,
            maxParticipants: 10,}
        ]
    }



      const newItems:any = {};
      Object.keys(items).forEach((key) => {
        if (typeof key === "string"){
            console.log('string')
        }
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
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
    <View style={tw`pb-4`}>
        <TouchableWithoutFeedback>
            <View style={tw`flex flex-col gap-8 rounded-3xl bg-[#F0F0FF] p-5 justify-between shadow-sm`}>
                <View style={tw`flex flex-col gap-2`}>
                    <View style={tw`flex flex-row flex-nowrap items-center justify-between`}>
                        <Text style={tw`text-base font-semibold`}>{item.title}</Text>
                        <Tag>{item.category}</Tag>
                    </View>

                    <Text style={tw`text-xs text-[#404446]`}>
                        {item.dateTime}
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
    <View style={{flex: 1, paddingTop: 34,}}>
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
  