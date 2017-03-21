import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SwiperConfigInterface, SwiperModule } from 'angular2-swiper-wrapper';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ClientesComponent } from './clientes/clientes.component';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: false,
  mousewheelControl: false
};


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SwiperModule.forRoot(SWIPER_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
