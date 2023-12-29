import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AssetsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class AssetsModule { }
