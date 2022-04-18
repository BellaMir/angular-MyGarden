import { FlowersDetailComponent } from './pages/flowers-detail/flowers-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { FlowersComponent } from './pages/flowers/flowers.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'flowers', component: FlowersComponent},
 {path: 'flowers/:flowerID', component: FlowersDetailComponent},//:flowerID es una variable, todo lo que esté después de : se comporta como var
 {path: 'about', component: AboutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
