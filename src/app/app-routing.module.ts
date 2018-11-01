import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ShoesDetailComponent } from './shoes-detail/shoes-detail.component';
import { AdminComponent }   from './admin/admin.component';
import { ShoesComponent } from './shoes/shoes.component';



const routes: Routes = [

  { path: 'shoes', component: ShoesComponent},
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
