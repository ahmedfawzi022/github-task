/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
// import { HeaderComponent } from './component/header/header.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],

  bootstrap: [AppComponent],
  providers: [

  ],
})
export class AppModule {
}
