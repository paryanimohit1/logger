export interface ITimelinesListItem {
    id: number,
    title: string,
    description?: string,
    createdOn: Date,
    modifiedOn: Date,
    createdBy: string
}

export interface ITimelineEvent {
    id: number; // Unique identifier for the event
    title: string; // Title or name of the event
    description?: string; // Optional description for the event
    timestamp: Date; // Date and time when the event was logged
    createdBy: string; // User who logged the event
}

