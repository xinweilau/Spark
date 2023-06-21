/**
 * Represents an instance of a single registered Activity.
 * Temporary interface until we formalise the data representation.
 */
export interface Activity {
    id?: string;
    title: string;
    description?: string;
    category: ActivityCategory;
    subCategory: ActivityCategory;
    startTime: Date;
    endTime: Date;
    location: string;
    maxParticipants: number;
}

export interface ActivityCategory {
    id: string;
    name: string;
}
