import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'actions-list',
    styleUrls: ['./actions-list.component.scss'],
    templateUrl: './actions-list.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class ActionsListComponent {
    constructor(
        private location: Location,
    ) {}
}
