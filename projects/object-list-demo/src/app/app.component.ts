import { Component } from '@angular/core';
import { TableFieldModel } from '../../../object-list/src/models/table-field.model';
import { UserModel } from './models/user.model';
import { TableSortModel } from '../../../object-list/src/models/table-sort.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fields = [
    new TableFieldModel('name', 'Nome', 'getName', 'event', undefined, undefined, true),
    new TableFieldModel('sex', 'Sex', 'getSex', 'event', undefined, undefined, true),
  ]
  data = [
    new UserModel(1, 'Marco', 'female'),
    new UserModel(2, 'Gino', 'Male'),
    new UserModel(3, 'Ugo', 'Male'),
  ]

  sorting = new TableSortModel('name', false);

  constructor() {
  }
}
