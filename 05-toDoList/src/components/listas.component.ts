import { Component, Input } from '@angular/core';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { ToDoServices } from '../services/todo.services';
import { AddListPage } from '../pages/addList/add-list-component';
import { List } from '../models/list-model';


@Component({
  selector: 'app-lists',
  templateUrl: 'listas.component.html'
})
export class ListsComponent {

@Input() finish:boolean = false;

  constructor(public navCtrl: NavController, public toDoService:ToDoServices, private alertCtrl:AlertController) {

  }


  itemSelected(item:List){
    this.navCtrl.push(AddListPage, {
        title: item.title,
        list: item
    })
    console.log(item);
}

    deleteList(list:List){
        this.toDoService.deleteList(list);
    }

    editTitle(list:List, slideItem:ItemSliding){

        slideItem.close();
        
        const alert = this.alertCtrl.create({
            title: 'Edit ToDo List',
            message: 'Edit name of the new list',
            inputs: [{
                name: 'title',
                placeholder: 'New ToDo List',
                value: list.title 
            }],
            buttons: [
                {
                  text: 'Cancel',
                },
                {
                  text: 'Update',
                  handler: data => {
                      if(data.title.length == 0){
                          return;
                      }
                      list.title = data.title;
                      this.toDoService.saveStorage();
                    console.log('Saved clicked' + data);
                  }
                }
              ]
        });

        alert.present();

    }
}
