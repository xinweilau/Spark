/**
 * Mock data for testing
 */
import { Activity, ActivityCategory } from "../types/Activity";
import { Metric } from "../types/Metric";

export const CATEGORY_DATA: ActivityCategory[] = [
    {
        id: '1',
        name: 'Sports',
    },
    {
        id: '2',
        name: 'Volunteer',
    },
    {
        id: '3',
        name: 'Fitness',
    },
    {
        id: '4',
        name: 'Wellness',
    }
]

export const ACTIVITY_DATA: Activity[] = [
    {
        id: '1',
        title: 'Spin Class',
        category: CATEGORY_DATA[2],
        dateTime: new Date(),
        location: 'R1OT',
        description: 'A spin class is a high-intensity cycling workout that generally takes place on a stationary machine with a heavy, weighted flywheel that is linked to the pedals.',
        numParticipants: 1,
        maxParticipants: 10,
    },
    {
        id: '2',
        title: 'Hot Yoga',
        category: CATEGORY_DATA[3],
        dateTime: new Date(),
        location: 'Fitness First Clementi',
        description: 'Hot yoga is a vigorous form of yoga performed in a studio that is heated to 105 F (40 C) and has a humidity of 40 percent. The formal name for hot yoga is Bikram yoga.',
        numParticipants: 0,
        maxParticipants: 10,
    },
    {
        id: '3',
        title: 'IPPT Training',
        category: CATEGORY_DATA[2],
        dateTime: new Date(),
        location: 'Sungei Gedong Camp',
        description: 'The Individual Physical Proficiency Test (IPPT) is a standard physical fitness test used by the Singapore Armed Forces (SAF), Singapore Civil Defence Force (SCDF), and Singapore Police Force (SPF) to test the basic components of physical fitness.',
        numParticipants: 5,
        maxParticipants: 10,
    }
]

export const OVERVIEW_DATA: Metric[] = [
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

export const SUBCATEGORY_SPORTS: ActivityCategory[] = [
    {
        id: '1',
        name: 'Basketball',
    },
    {
        id: '2',
        name: 'Soccer',
    }
]

export const SUBCATEGORY_LIKED: ActivityCategory[] = [
    {
        id: '2',
        name: 'Soccer',
    }
]

export const SPORTS_DATA: ActivityCategory[] = [
    {
        id: '1',
        name: 'Basketball',
    },
    {
        id: '2',
        name: 'Soccer',
    },
    {
        id: '3',
        name: 'Badminton',
    }
]
