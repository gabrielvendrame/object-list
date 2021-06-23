import { NgModule } from '@angular/core';
import { ObjectListComponent } from './object-list.component';
import { FilterPipe } from '../pipes/filter.pipe';



@NgModule({
  declarations: [
    ObjectListComponent,
    FilterPipe
  ],
  imports: [
  ],
  exports: [
    ObjectListComponent
  ]
})
export class ObjectListModule { }
