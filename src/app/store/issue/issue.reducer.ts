import { IIssue } from '../../models/issue.models';
import { Action, createReducer, on } from '@ngrx/store';
import * as IssueActions from './issue.actions';
import { items } from 'src/app/constants/mock.data';
import { IssueState } from '.';

export const issueFeatureKey = 'issue';

export const initialState: IssueState = {
    issues: [...items],
    issue: undefined
};

export const issueReducer = createReducer(
  initialState,
  on(IssueActions.addIssue, (state, payload) => ({ ...state, items: [...state.issues, payload.item] })),
  on(IssueActions.viewIssue, (state, payload) => ({ ...state, issue: state.issues.find((issue: IIssue) => issue.id === payload.id) })),
);

export const selectIssues = (state: IssueState) => state?.issues;
export const selectIssue = (state: IssueState) => state?.issue;