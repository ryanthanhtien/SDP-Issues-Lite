import { IIssue } from "../models/issue.models";
import { IUser } from "../models/user.models";

export const items: IIssue[] =  [
    {
        id: '1000',
        title: 'Training',
        assigneeId: '4384',
        note: 'Only WCs from 2 projects reported receiving any training'
    },
    {
        id: '1001',
        assigneeId: '1987223',
        title: 'Running an Event',
        note: 'Overseeing initiatives organised'
    },
    {
        id: '1003',
        title: 'Task 03',
        assigneeId: '1001991',
        note: 'Only WCs from 2 projects reported receiving any training'
    }
]

export const usersData: IUser[] = [
    {
        id: '4384',
        name: 'Alex Badon'
    },
    {
        id: '1001991',
        name: 'Kimmy Jum'
    },
    {
        id: '1987223',
        name: 'Ryan Nguyen'
    }
]