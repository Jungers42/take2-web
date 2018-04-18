import { NgModule        } from '@angular/core';
import { CommonModule    } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule   } from '@angular/material';
import { MatIconModule   } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
    ],
})
export class MaterialModule { }
