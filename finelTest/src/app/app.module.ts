import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componets/menu/menu.component';
import { SliderComponent } from './componets/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './componets/card/card.component';
import { FooterComponent } from './componets/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { HomeComponent } from './componets/home/home.component';
import { CommonModule } from '@angular/common';
import { PromoComponent } from './componets/pages/promo/promo.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
    PromoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatNativeDateModule, MatOptionModule, 
    BrowserAnimationsModule,
    CommonModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
