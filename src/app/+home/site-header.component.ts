import { Component } from '@angular/core';
import { Location  } from '@angular/common';

@Component({
    selector: 'site-header',
    styleUrls: ['./site-header.component.scss'],
    templateUrl: './site-header.component.html',
})

export class SiteHeaderComponent {
    constructor(
        private location: Location,
    ) {}

    public logout() {
      console.log('LOGOUT');
    }
}
