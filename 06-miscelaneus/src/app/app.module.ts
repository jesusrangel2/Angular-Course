import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { NgClasessComponent } from './components/ng-clasess/ng-clasess.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users-components/users/users.component';
import { UsersDetailComponent } from './components/users-components/users-detail/users-detail.component';
import { UsersEditComponent } from './components/users-components/users-edit/users-edit.component';
import { UsersNewComponent } from './components/users-components/users-new/users-new.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    NgClasessComponent,
    ResaltadoDirective,
    NgswitchComponent,
    HomeComponent,
    UsersComponent,
    UsersNewComponent,
    UsersEditComponent,
    UsersDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
