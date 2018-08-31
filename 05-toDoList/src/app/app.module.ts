import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PendingsPage } from '../pages/pendings/pendings.component';
import { FinishedPage } from '../pages/finished/finished.component';
import { ToDoServices } from '../services/todo.services';
import { AddListPage } from '../pages/addList/add-list-component';
import { FilterCompletedPipe } from '../pipes/filter-completed/filter-completed';
import { ListsComponent } from '../components/listas.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingsPage,
    FinishedPage,
    AddListPage,
    FilterCompletedPipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingsPage,
    FinishedPage,
    AddListPage,
    ListsComponent
  ],
  providers: [
    StatusBar,
    ToDoServices,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
