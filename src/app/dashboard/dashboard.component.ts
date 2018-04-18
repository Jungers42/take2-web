import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';

@Component({
    selector: 't2-dashboard',
    styleUrls: [ './dashboard.component.css' ],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(
        public appState: AppState,
    ) {}

    public ngOnInit() {
      console.log('Dashboard Init');
    }
}
