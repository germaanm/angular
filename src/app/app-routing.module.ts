import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { PagoComponent } from './Components/pago/pago.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { ReservacionComponent } from './Components/reservacion/reservacion.component';



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'servicos', component: ServiciosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'pago', component: PagoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'reservacion', component: ReservacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
