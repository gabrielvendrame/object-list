import { NgModule } from '@angular/core';
import { ObjectListComponent } from './object-list.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ObjectListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    ObjectListComponent
  ]
})
export class ObjectListModule { }
