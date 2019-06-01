import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule
} from '@angular/material';
import { NgPipesModule } from 'ngx-pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatRippleModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        NgPipesModule,
        RouterModule,
        MatDialogModule,
        ReactiveFormsModule,
        TableModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatRippleModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        NgPipesModule,
        ReactiveFormsModule,
        TableModule
    ],
    declarations: []
})
export class SharedModule {
}
