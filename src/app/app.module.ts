import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UnderNavbarComponent } from './under-navbar/under-navbar.component';
import { TopRowComponent } from './top-row/top-row.component';
import { MiddleRowComponent } from './middle-row/middle-row.component';
import { MidSectionComponent } from './mid-section/mid-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UnderNavbarComponent,
    TopRowComponent,
    MiddleRowComponent,
    MidSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
