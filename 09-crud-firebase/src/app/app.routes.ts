import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

const ROUTES: Routes = [
    { path: '', component: SearchBarComponent },
    { path: 'heroes', component: SearchBarComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', component: SearchBarComponent },

   
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
