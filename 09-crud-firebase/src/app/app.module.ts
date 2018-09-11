import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms'
import { NgxTypeaheadModule } from 'ngx-typeahead'; 
import { BsDatepickerModule } from 'ngx-bootstrap'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { APP_ROUTES } from './app.routes';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { InputTypeaheadComponent } from './components/search-bar/input-typeahead/input-typeahead.component';
import { DatePickerComponent } from './components/search-bar/date-picker/date-picker.component';
import { PaxPickerComponent } from './components/search-bar/pax-picker/pax-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    SearchBarComponent,
    InputTypeaheadComponent,
    DatePickerComponent,
    PaxPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxTypeaheadModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
