import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IssueState } from ".";

import * as fromStore from "./issue.reducer";

const issueSelector = createFeatureSelector<IssueState>(
  fromStore.issueFeatureKey
);

export const issues = createSelector(issueSelector, fromStore.selectIssues);

export const issue = createSelector(issueSelector, fromStore.selectIssue);
