import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';


@Component({
    selector     : 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls    : [ './app.component.scss' ],
    templateUrl  : './app.component.html',
})
export class AppComponent implements OnInit {
    public name = 'Angular Starter';
    public showDevModule: boolean = environment.showDevModule;

    constructor(
        public appState: AppState
    ) {}

    public ngOnInit() { }
}
