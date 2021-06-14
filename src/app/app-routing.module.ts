import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {SelectCityComponent} from "./select-city/select-city.component";
import {ShowWeatherComponent} from "./show-weather/show-weather.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'select-city',
    component: SelectCityComponent
  },
  {
    path: 'show-weather',
    component: ShowWeatherComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
