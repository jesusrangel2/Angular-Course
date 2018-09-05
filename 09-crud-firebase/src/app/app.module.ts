import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms'
import { NgxTypeaheadModule } from 'ngx-typeahead';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { APP_ROUTES } from './app.routes';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { InputTypeaheadComponent } from './components/search-bar/input-typeahead/input-typeahead.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    SearchBarComponent,
    InputTypeaheadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxTypeaheadModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
