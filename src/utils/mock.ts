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
