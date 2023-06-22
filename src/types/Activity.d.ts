/**
 * Represents an instance of a single registered Activity.
 * Temporary interface until we formalise the data representation.
 */
export interface Activity {
    id?: string;
    title: string;
    description?: string;
    category: string;
    subCategory: string;
    startTime: Date;
    endTime: Date;
    location: string;
    maxParticipants: number;
}

type CategoryData = {
    [category: string]: string[];
};
