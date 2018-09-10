import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule,
         MatButtonModule,
         MatFormFieldModule 
        } from '@angular/material';

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule
    ],
    exports:[]
})
export class SharedModule { }