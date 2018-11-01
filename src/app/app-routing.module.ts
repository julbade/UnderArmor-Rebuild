import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPlaceComponent } from './marketplace/marketplace.component';
// import { ShoesDetailComponent } from './shoes-detail/shoes-detail.component';
import { AdminComponent }   from './admin/admin.component';



const routes: Routes = [

  { path: 'marketplace', component: MarketPlaceComponent},
  // { path: 'shoes/:id', component: ShoesDetailComponent},
  { path: 'admin', component: AdminComponent}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {

}
