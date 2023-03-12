import * as issueActions from '../../../store/issue/issue.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { nanoid } from 'nanoid'
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.models';
import { usersData } from 'src/app/constants/mock.data';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss']
})
export class IssueFormComponent {

  issueForm = new FormGroup({
    id: new FormControl(nanoid()),
    title: new FormControl('', Validators.required),
    note: new FormControl(''),
    assigneeId: new FormControl(''),
    createdBy: new FormControl(1000),
    duedate: new FormControl(''),
  });

  matcher = new MyErrorStateMatcher();

  users: IUser[] = usersData;

  constructor(
    private router: Router,
    private store: Store) { }

  onSubmit() {
    if(this.issueForm.valid) {
      this.store.dispatch(issueActions.addIssue({item: this.issueForm.value}));
      this.router.navigate(['/']);
    }
  }

  get f() {
    return this.issueForm.controls;
  }


}
