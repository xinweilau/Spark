/**
 * Represents an instance of an aggregated metric value.
 * Temporary interface until we formalise the data representation.
 */
export interface Metric {
    title: string;
    value: string;
    type: 'time' | 'fitness' 
}
