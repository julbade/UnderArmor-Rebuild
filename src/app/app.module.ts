import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MarketPlaceComponent } from './marketplace/marketplace.component';
import { TopRowComponent } from './top-row/top-row.component';
import { MiddleRowComponent } from './middle-row/middle-row.component';
import { MidSectionComponent } from './mid-section/mid-section.component';
import { UnderMidsectionComponent } from './under-midsection/under-midsection.component';
import { AthleteComponent } from './athlete/athlete.component';
import { InstagramComponent } from './instagram/instagram.component';
import { AdminComponent } from './admin/admin.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { ShoesComponent } from './shoes/shoes.component';
import { ShoesDetailComponent } from './shoes-detail/shoes-detail.component';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MarketPlaceComponent,
    TopRowComponent,
    MiddleRowComponent,
    MidSectionComponent,
    UnderMidsectionComponent,
    AthleteComponent,
    InstagramComponent,
    AdminComponent,
    ShoesComponent,
    ShoesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
   AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
