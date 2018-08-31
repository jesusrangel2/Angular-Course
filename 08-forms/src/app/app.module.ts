import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormByTemplateComponent } from './components/form-by-template/form-by-template.component';
import { FormByDataComponent } from './components/form-by-data/form-by-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FormByTemplateComponent,
    FormByDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
