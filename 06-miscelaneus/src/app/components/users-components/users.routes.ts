import {Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { UsersNewComponent } from "./users-new/users-new.component";
import { UsersEditComponent } from "./users-edit/users-edit.component";
import { UsersDetailComponent } from "./users-detail/users-detail.component";



export const USER_ROUTES:Routes = [
    {
        path: 'users/:id', 
        component: UsersComponent,
        children: [
            {path: 'new', component: UsersNewComponent},
            {path: 'edit', component: UsersEditComponent},
            {path: 'detail', component: UsersDetailComponent},
            {path: '**', pathMatch: 'full', redirectTo:'new'}
        ]
    },
    
];

