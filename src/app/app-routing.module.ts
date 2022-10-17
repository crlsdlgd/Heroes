import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  // Esto le dice al enrutador que haga coincidir esa URL path: 'heroes'
  // y muestre HeroesComponentcuando la URL es algo así como localhost:4200/heroes.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//Ruta predeterminada
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },//detalle del hero por id
]

@NgModule({
  declarations: [],
  // La siguiente línea agrega RouterModule al AppRoutingModule imports arreglo y lo
  // configura con routes en un solo paso llamando a RouterModule.forRoot():
  imports: [RouterModule.forRoot(routes)],
  // El método se llama forRoot()porque configura el enrutador en el nivel raíz de la aplicación.
  // El método forRoot() proporciona los proveedores de servicios y las directivas necesarias para
  // el enrutamiento y realiza la navegación inicial en función de la URL del navegador actual.
  exports: [RouterModule],
})
export class AppRoutingModule { }
