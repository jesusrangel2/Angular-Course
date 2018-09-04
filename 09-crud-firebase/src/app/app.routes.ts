import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const ROUTES: Routes = [
    { path: '', component: HeroesComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', component: HeroesComponent },

   
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
