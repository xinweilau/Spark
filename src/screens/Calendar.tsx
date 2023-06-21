import React, {useState} from 'react';
import {View, TouchableOpacity, ScrollView, Text, SafeAreaView} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import tw from 'twrnc';
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
            {name:"Yoga",height: Math.max(50, Math.floor(Math.random() * 150))}
           ,{name:"Basketball",height: Math.max(50, Math.floor(Math.random() * 150))}
            ],
    
        "2023-06-23":[
        {name:"IPPT",height: Math.max(50, Math.floor(Math.random() * 150))}
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

    const getActivityObject = (item: any): Activity => {
        // for (let i = 0; i < 5; i++) {}
        return ACTIVITY_DATA[0]
    }

    return (
      <View style={tw`pb-4`}>
        <ActivityItem {...getActivityObject(item)}/>
      </View>
    );
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

