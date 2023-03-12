import { viewIssue } from './../../../store/issue/issue.actions';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromIssueSelector from '../../../store/issue/issue.selectors';
import * as fromIssueStore from '../../../store/issue/issue.reducer';
import { IIssue } from 'src/app/models/issue.models';
import { usersData } from 'src/app/constants/mock.data';
import { IUser } from 'src/app/models/user.models';
import { IssueState } from 'src/app/store/issue';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class IssueDetailComponent implements OnInit {

  private id: any = null;
  issue: IIssue | undefined = undefined;
  users: IUser[] = usersData;
  user: IUser | undefined = undefined;
  constructor(
    readonly activatedRoute: ActivatedRoute,
    private store: Store<IssueState>,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    if(!!this.id) {
      this.store.dispatch(viewIssue({id: this.id}))
    }
    this.fetchIssue();

  }

  fetchIssue() {
    this.store.select(fromIssueSelector.issue).subscribe((resp: IIssue | undefined) => {
      this.issue = resp;
      if(this.issue && this.issue?.assigneeId) {
        this.user = this.getUserInfo(this.issue?.assigneeId);
      }
    });
  }

  getUserInfo(id) {
    return this.users.find((user: IUser) => user.id === id);
  }

  close() {
    this.router.navigate(['/'])
  }

}
