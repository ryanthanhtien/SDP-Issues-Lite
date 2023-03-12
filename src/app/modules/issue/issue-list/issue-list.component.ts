import { AppRouters } from "./../../../constants/index";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IIssue } from "src/app/models/issue.models";
import * as fromIssueSelector from "../../../store/issue/issue.selectors";
import { Observable, pipe } from "rxjs";
import { Router } from "@angular/router";
import { IssueState } from "src/app/store/issue";
import { usersData } from "src/app/constants/mock.data";
import { IUser } from "src/app/models/user.models";
import { filter, map } from "rxjs/operators";
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector: "app-issue-list",
  templateUrl: "./issue-list.component.html",
  styleUrls: ["./issue-list.component.scss"],
})
export class IssueListComponent implements OnInit {
  issues$: Observable<IIssue[]> | null = null;
  users: IUser[] = usersData;

  constructor(private router: Router, private store: Store<IssueState>) {}

  ngOnInit(): void {
    this.issues$ = this.store
      .select(fromIssueSelector.issues)
      .pipe(map((result) => result.filter((a) => a.assigneeId != null)));
  }

  onSelectIssue(issue: IIssue) {
    this.router.navigate([AppRouters.VIEW_ISSUE(issue.id)]);
  }

  onFilter($event: MatSelectChange) {
    this.issues$ = this.store
      .select(fromIssueSelector.issues)
      .pipe(map((result) => result.filter((a) => $event.value ? a.assigneeId === $event.value : true)));
  }

  getUserInfo(id) {
    return this.users.find((user: IUser) => user.id === id).name || 'Unassigned';
  }
  
}
