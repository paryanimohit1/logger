import { ITimelinesListItem } from "src/app/models/timelines.interface";

export const dummyTimelinesList: ITimelinesListItem[] = [
    {
      id:1,
      title: 'Project A Timeline',
      description: 'Timeline for Project A',
      createdOn: new Date('2023-08-15T10:00:00'),
      modifiedOn: new Date('2023-08-15T10:00:00'),
      createdBy: 'User A',
    },
    {
    id:2,
      title: 'Vacation Planning Timeline',
      description: 'Timeline for Vacation Planning',
      createdOn: new Date('2023-07-10T08:30:00'),
      modifiedOn: new Date('2023-07-10T08:30:00'),
      createdBy: 'User B',
    },
    {
        id: 3,
        title: 'Book Release Timeline',
        description: 'Timeline for Book Release',
        createdOn: new Date('2023-06-20T09:30:00'),
        modifiedOn: new Date('2023-06-20T09:30:00'),
        createdBy: 'Author X',
      },
      {
        id: 4,
        title: 'Home Renovation Timeline',
        description: 'Timeline for Home Renovation',
        createdOn: new Date('2023-05-01T08:15:00'),
        modifiedOn: new Date('2023-05-01T08:15:00'),
        createdBy: 'Homeowner A',
      },
      {
        id: 5,
        title: 'Product Launch Timeline',
        description: 'Timeline for Product Launch',
        createdOn: new Date('2023-03-15T11:00:00'),
        modifiedOn: new Date('2023-03-15T11:00:00'),
        createdBy: 'Product Manager C',
      }
  ];