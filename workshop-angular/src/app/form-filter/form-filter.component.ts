import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Flight} from '../flight';
import {FlightsService} from '../flights.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})
export class FormFilterComponent implements OnInit {
  public subscription: Subscription;
  public flights: Flight[];
  public flightName: any;

  constructor() {
  }

  ngOnInit() {
    this.subscription = FlightsService.getFlights().subscribe((flights) => {
      this.flights = flights;
    });
  }

  public onClick() {
    console.log('click', this.flightName);
  }

}
