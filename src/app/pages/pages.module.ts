import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];
@NgModule({
  declarations: [
    ...PAGES_COMPONENTS,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    
  ]
})
export class PagesModule { }
