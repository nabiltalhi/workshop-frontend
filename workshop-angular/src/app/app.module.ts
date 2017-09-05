import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FormFilterComponent} from './form-filter/form-filter.component';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule,
  MdDatepickerModule, MdGridListModule,
  MdInputModule, MdNativeDateModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlightsService} from './flights.service';
import { FlightPipe } from './flight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormFilterComponent,
    FlightPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdButtonModule,
    MdGridListModule,
    BrowserAnimationsModule
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
