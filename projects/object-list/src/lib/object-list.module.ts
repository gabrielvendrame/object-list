import { NgModule } from '@angular/core';
import { ObjectListComponent } from './object-list.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ObjectListComponent,
    FilterPipe
  ],
    imports: [
        CommonModule,
    ],
  exports: [
    ObjectListComponent
  ]
})
export class ObjectListModule { }
