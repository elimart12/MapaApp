import { Routes } from '@angular/router';
import { InputPage } from './input/input.page';
import { MapPage } from './map/map.page';

export const routes: Routes = [
  {
    path: '',
    component: InputPage,
  },
  {
    path: 'map',
    component: MapPage,
  },
];
