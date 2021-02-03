import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroesListComponent} from './heroes-list/heroes-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [];

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HeroesListComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
