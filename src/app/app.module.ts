import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { SwiperModule } from 'swiper/angular';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { PagoComponent } from './Components/pago/pago.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { ReservacionComponent } from './Components/reservacion/reservacion.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ServiciosComponent,
    PagoComponent,
    InicioComponent,
    RegistroComponent,
    ReservacionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }