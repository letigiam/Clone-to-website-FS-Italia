import { TripService } from 'src/app/services/multiTrip.services';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Trip } from 'src/app/models/multiTrip';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  myControl = new FormControl();
  options: TripService[] = [];
  filteredOptions!: Observable<TripService[]>;

  ngOnInit() {

  }

  // displayFn(options: TripService): string {
  //   return options && options.multiTrip ? options.multiTrip : '';
  // }

}