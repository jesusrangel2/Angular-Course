import {RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from "./components/users-components/users/users.component";

import { USER_ROUTES } from "./components/users-components/users.routes";


const APP_ROUTES:Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: 'users/:id', 
        component: UsersComponent,
        children: USER_ROUTES
    },
    {path: '', pathMatch: 'full', redirectTo:'home'},
    {path: '**', pathMatch: 'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);