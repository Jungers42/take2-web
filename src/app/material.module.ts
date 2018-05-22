import { NgModule        } from '@angular/core';
import { CommonModule    } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatCardModule   } from '@angular/material';
import { MatIconModule   } from '@angular/material';
import { MatMenuModule   } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
    ],
})
export class MaterialModule { }
