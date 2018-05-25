import { NgModule        } from '@angular/core';
import { CommonModule    } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatCardModule   } from '@angular/material';
import { MatIconModule   } from '@angular/material';
import { MatMenuModule   } from '@angular/material';
import { MatTabsModule   } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
    ],
})
export class MaterialModule { }
