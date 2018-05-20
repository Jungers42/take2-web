import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'nav-main',
    styleUrls: ['./nav-main.component.scss'],
    templateUrl: './nav-main.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class NavMainComponent {
    constructor(
        private location: Location,
    ) {}
}
