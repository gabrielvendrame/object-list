import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectListModule } from '../../../object-list/src/lib/object-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObjectListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
