import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PokelistComponent} from './pokelist/pokelist.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {AuthGuardGuard} from './auth-guard.guard';


const routes: Routes = [
  {
    path: '',
    component: PokelistComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pokelist',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
