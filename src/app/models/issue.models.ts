export interface IIssue {
    id: string,
    title: string,
    note?: string,
    startDate?: any,
    endDate?: any,
    assigneeId?: string,
    assigneeFullName?: string,
}