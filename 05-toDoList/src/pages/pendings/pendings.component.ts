import {Component} from '@angular/core';
import { ToDoServices } from '../../services/todo.services';
import { List } from '../../models/list-model';
import { NavController } from 'ionic-angular';
import { AddListPage } from '../addList/add-list-component';
import { AlertController } from 'ionic-angular';


@Component({

    selector:'page-pendings',
    templateUrl: 'pendings.component.html'
})
export class PendingsPage{

    constructor(public toDoService:ToDoServices, private navCtrl:NavController, private alertCtrl:AlertController){

    }

   


    addList(){
        const alert = this.alertCtrl.create({
            title: 'New ToDo List',
            message: 'Name of the new list',
            inputs: [{
                name: 'title',
                placeholder: 'New ToDo List'    
            }],
            buttons: [
                {
                  text: 'Cancel',
                },
                {
                  text: 'Add',
                  handler: data => {
                      if(data.title.length == 0){
                          return;
                      }
                      this.navCtrl.push(AddListPage, {title: data.title});
                    console.log('Saved clicked' + data);
                  }
                }
              ]
        });

        alert.present();
    }
}