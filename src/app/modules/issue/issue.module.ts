import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueRoutingModule } from './issue-routing.module';
import { IssueComponent } from './issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { SharedModule } from 'src/app/shared/shared-module.module';
import { StoreModule } from '@ngrx/store';
import { issueReducer } from 'src/app/store/issue/issue.reducer';

@NgModule({
  declarations: [
    IssueComponent,
    IssueListComponent,
    IssueDetailComponent,
    NewIssueComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IssueRoutingModule,
    StoreModule.forFeature('issue', issueReducer),
  ]
})
export class IssueModule { }
