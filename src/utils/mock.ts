/**
 * Mock data for testing
 */
import { Activity, CategoryData } from "../types/Activity";
import { Metric } from "../types/Metric";

export const CATEGORY_DATA: CategoryData = {
    'Sports': [
        "Cycling",
        "Basketball",
        "Running",
        "Boxing",
    ],
    'Volunteer': [
        "Elderly Care"
    ],
    'Wellness': [
        "Yoga",
        "TCM",
        "Meditation",
    ],
}

export const ACTIVITY_DATA: Activity[] = [
    {
        id: '1',
        title: 'Spin Class',
        category: 'Sports',
        subCategory: 'Spin Class',
        startTime: new Date(),
        endTime: new Date(),
        location: 'R1OT',
        description: 'A spin class is a high-intensity cycling workout that generally takes place on a stationary machine with a heavy, weighted flywheel that is linked to the pedals.',
        maxParticipants: 10,
    },
    {
        id: '2',
        title: 'Hot Yoga',
        category: 'Wellness',
        subCategory: 'Yoga',
        startTime: new Date(),
        endTime: new Date(),
        location: 'Fitness First Clementi',
        description: 'Hot yoga is a vigorous form of yoga performed in a studio that is heated to 105 F (40 C) and has a humidity of 40 percent. The formal name for hot yoga is Bikram yoga.',
        maxParticipants: 10,
    },
    {
        id: '3',
        title: 'IPPT Training',
        category: 'Sports',
        subCategory: 'Running',
        startTime: new Date(),
        endTime: new Date(),
        location: 'Sungei Gedong Camp',
        description: 'The Individual Physical Proficiency Test (IPPT) is a standard physical fitness test used by the Singapore Armed Forces (SAF), Singapore Civil Defence Force (SCDF), and Singapore Police Force (SPF) to test the basic components of physical fitness.',
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

export const LEADERBOARD_DATA: { name: string, points: number }[] = [
    {
        name: 'John',
        points: 1234,
    },
    {
        name: 'Mary',
        points: 1021,
    },
    {
        name: 'Chye',
        points: 1300,
    },
    {
        name: 'Tan Hu Soon',
        points: 987,
    },
    {
        name: 'Bryan Lim',
        points: 976,
    },
    {
        name: 'Vivien',
        points: 954,
    },
    {
        name: 'Lau Xin Wei',
        points: 942,
    },
    {
        name: 'Leonard Lee',
        points: 45,
    },
    {
        name: 'Ng Zi Xuan',
        points: 48,
    },
    {
        name: 'Ashley Goh',
        points: 874,
    },
    {
        name: 'Natalie Tan',
        points: 321,
    },
    {
        name: 'Nicholas Chong',
        points: 347,
    },
    {
        name: 'Michael',
        points: 358,
    },
    {
        name: 'Haley',
        points: 390,
    },
    {
        name: 'Jovan',
        points: 2,
    }
]