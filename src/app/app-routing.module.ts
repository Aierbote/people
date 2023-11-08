import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeSpaceComponent } from './components/home-space/home-space.component';
import { LinkZeldaComponent } from './components/link-zelda/link-zelda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'homespace', component: HomeSpaceComponent },
  { path: 'link2nintendo', component: LinkZeldaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // TODO: generarmi un componente not found
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
