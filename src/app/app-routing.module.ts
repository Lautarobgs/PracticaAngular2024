import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutmeComponent } from './components/pages/aboutme/aboutme.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ForumComponent } from './components/pages/forum/forum.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutme',component:AboutmeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'forum', component:ForumComponent},
  {path:'**',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
