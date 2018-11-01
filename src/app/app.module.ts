import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MarketPlaceComponent } from './marketplace/marketplace.component';
import { TopRowComponent } from './top-row/top-row.component';
import { MiddleRowComponent } from './middle-row/middle-row.component';
import { MidSectionComponent } from './mid-section/mid-section.component';
import { UnderMidsectionComponent } from './under-midsection/under-midsection.component';
import { AthleteComponent } from './athlete/athlete.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MarketPlaceComponent,
    TopRowComponent,
    MiddleRowComponent,
    MidSectionComponent,
    UnderMidsectionComponent,
    AthleteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
