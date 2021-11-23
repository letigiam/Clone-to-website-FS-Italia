
import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/multiTrip';
import { TripService } from 'src/app/services/multiTrip.services';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  public multiTrip:Trip[] = [];

  constructor(private servise: TripService) { }

  ngOnInit() {
    this.multiTrip = this.servise.getTrip();
    console.log(this.multiTrip)
  }

}
