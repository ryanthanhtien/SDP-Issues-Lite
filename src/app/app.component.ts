import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRouters } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  newIssue() {
    this.router.navigate([AppRouters.NEW_ISSUE]);
  }

  home() {
    this.router.navigate(['/']);
  }
}
