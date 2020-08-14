import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FrontBodyComponent } from './front-body/front-body.component';
import { HeaderComponent } from '../component/header/header.component';

@NgModule({
  declarations: [HomeComponent,HeaderComponent, UserFormComponent,UserSidebarComponent,FrontPageComponent,FrontBodyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
