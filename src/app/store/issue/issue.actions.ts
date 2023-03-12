import { createAction, props } from "@ngrx/store";
import { IIssue } from "src/app/models/issue.models";

export const addIssue = createAction("[ISSUE] Add", props<{ item: IIssue }>());
export const updateIssue = createAction(
  "[ISSUE] Update",
  props<{ item: IIssue }>()
);

export const deleteIssue = createAction(
  "[ISSUE] Delete",
  props<{ id: string }>()
);
export const viewIssue = createAction("[ISSUE] View", props<{ id: string }>());
