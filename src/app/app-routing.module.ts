import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoesDetailComponent } from './shoes-detail/shoes-detail.component';
import { AdminComponent }   from './admin/admin.component';
import { ShoesComponent } from './shoes/shoes.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenComponent } from './men/men.component';



const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'shoes', component: ShoesComponent},
  { path: 'men', component: MenComponent}
  { path: 'shoes/:id', component: ShoesDetailComponent},
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
