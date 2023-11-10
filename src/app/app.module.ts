import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OpencarlockComponent } from './auto/opencarlock/opencarlock.component';
import { RepaircarlockComponent } from './auto/repaircarlock/repaircarlock.component';
import { CommonserviceComponent } from './commonservice/commonservice.component';
import {  NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NavbarMobileComponent,
    MainPageComponent,
    OpencarlockComponent,
    RepaircarlockComponent,
    CommonserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
