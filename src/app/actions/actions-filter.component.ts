import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'actions-filter',
    styleUrls: ['./actions-filter.component.scss'],
    templateUrl: './actions-filter.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class ActionsFilterComponent {
    constructor(
        private location: Location,
    ) {}
}
