import { IssueListComponent } from "./issue-list/issue-list.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewIssueComponent } from "./new-issue/new-issue.component";
import { IssueDetailComponent } from "./issue-detail/issue-detail.component";

const routes: Routes = [
  {
    path: "",
    component: IssueListComponent,
  },
  {
    path: "new",
    component: NewIssueComponent,
  },
  {
    path: ":id",
    component: IssueDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssueRoutingModule {}
