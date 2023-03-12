import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { IssueFormComponent } from './components/issue-form/issue-form.component';
import {MatSelectModule} from '@angular/material/select';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const components = [
  IssueFormComponent
]
const MatModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  ReactiveFormsModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatTabsModule,
  MatButtonToggleModule
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ...MatModules
  ],
  providers:[
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  exports: [IssueFormComponent,
  ...MatModules
  ]
})
export class SharedModule { }
