import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserFormComponent } from './user-form/user-form.component';
import {  FrontPageComponent} from './front-page/front-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      // {
      //   path:'form',
      //   component: UserFormComponent
      // },
      {
        path: 'home',
        component: FrontPageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
