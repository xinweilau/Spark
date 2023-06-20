/**
 * Represents an instance of a single Activity.
 * Temporary interface until we formalise the data representation.
 */
export interface Activity {
    id: string;
    title: string;
    description?: string;
    category: ActivityCategory;
    dateTime: Date;
    location: string;
    numParticipants: number;
    maxParticipants: number;
}

export interface ActivityCategory {
    id: string;
    name: string;
}
