import { ITimelineEvent } from "src/app/models/timelines.interface";

export const dummyTimelienEvents: ITimelineEvent[] = [
    {
      id: 1,
      title: 'Event 1',
      description: 'Description for Event 1',
      timestamp: new Date('2023-09-01T08:00:00'),
      createdBy: 'User A',
    },
    {
      id: 2,
      title: 'Event 2',
      timestamp: new Date('2023-09-03T14:30:00'),
      createdBy: 'User B',
    },
    {
      id: 3,
      title: 'Event 3',
      timestamp: new Date('2023-09-05T10:15:00'),
      createdBy: 'User A',
    },
    {
      id: 4,
      title: 'Event 4',
      timestamp: new Date('2023-09-07T16:45:00'),
      createdBy: 'User C',
    },
    {
      id: 5,
      title: 'Event 5',
      description: 'Description for Event 5',
      timestamp: new Date('2023-09-10T09:20:00'),
      createdBy: 'User B',
    },
    {
      id: 6,
      title: 'Event 6',
      timestamp: new Date('2023-09-12T11:30:00'),
      createdBy: 'User A',
    },
    {
      id: 7,
      title: 'Event 7',
      timestamp: new Date('2023-09-14T13:45:00'),
      createdBy: 'User B',
    },
    {
      id: 8,
      title: 'Event 8',
      timestamp: new Date('2023-09-17T17:00:00'),
      createdBy: 'User C',
    },
    {
      id: 9,
      title: 'Event 9',
      timestamp: new Date('2023-09-20T08:10:00'),
      createdBy: 'User A',
    },
    {
      id: 10,
      title: 'Event 10',
      description: 'Description for Event 10',
      timestamp: new Date('2023-09-23T10:45:00'),
      createdBy: 'User B',
    },
  ];