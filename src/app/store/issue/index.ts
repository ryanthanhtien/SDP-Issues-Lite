import { IIssue } from "src/app/models/issue.models";

export interface IssueState {
    issues: IIssue[];
    issue: IIssue;
  }