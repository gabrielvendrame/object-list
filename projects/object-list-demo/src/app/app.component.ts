import { Component } from '@angular/core';
import { TableFieldModel } from '../../../object-list/src/models/table-field.model';
import { UserModel } from './models/user.model';
import { TableSortModel } from '../../../object-list/src/models/table-sort.model';
import { TableHeaderModel } from '../../../object-list/src/models/table-header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fields = [
    new TableFieldModel('name', 'name', 'event'),
    new TableFieldModel('sex', 'sex', 'event')
  ]
  data = [
    new UserModel(1, 'Ugo', 'female'),
    new UserModel(2, 'Ugo', 'Male'),
    new UserModel(3, 'Ugo', 'Male'),
  ]

  sorting = new TableSortModel('name');
  header = [
    new TableHeaderModel('Nome'),
    new TableHeaderModel('Gender')
  ]

  constructor() {
  }
}
