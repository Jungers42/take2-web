import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'activist-goals',
    styleUrls: ['./activist-goals.component.scss'],
    templateUrl: './activist-goals.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class ActivistGoalsComponent {
    constructor(
        private location: Location,
    ) {}
}
