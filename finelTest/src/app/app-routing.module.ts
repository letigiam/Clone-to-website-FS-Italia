import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PromoComponent } from './componets/pages/promo/promo.component';
import { AdvancedSearchComponent } from './componets/pages/advanced-search/advanced-search.component';
import { HomeComponent } from './componets/home/home.component';
import { SingleTripComponent } from './componets/pages/single-trip/single-trip.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'single-trip', component: SingleTripComponent },
      {path: 'advanced-search', component: AdvancedSearchComponent },
      {path: 'promo', component: PromoComponent },
    ]),
    
  ],
  exports: [RouterModule],

  
})
export class AppRoutingModule { }
