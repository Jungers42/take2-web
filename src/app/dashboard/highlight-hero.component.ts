import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'highlight-hero',
    styleUrls: ['./highlight-hero.component.scss'],
    templateUrl: './highlight-hero.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class HighlightHeroComponent {
    constructor(
        private location: Location,
    ) {}
}
