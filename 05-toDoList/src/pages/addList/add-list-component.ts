import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import { ToDoServices } from '../../services/todo.services';
import { List } from '../../models/list-model';
import { ListItem } from '../../models/list-item-model';


@Component({

    selector:'page-addList',
    templateUrl: 'add-list.component.html'
})
export class AddListPage{

    list:List;
    nameItem:string = '';

    constructor(public toDoService:ToDoServices, private navParams: NavParams){

        if(this.navParams.get('list')){
            //si viene desde lista pendietes tendra el parametro list    
            this.list=this.navParams.get('list');

        }else{
            //obtener el titulo del prompt y psarselo a lista
            let title = this.navParams.get('title');
            this.list= new List(title);
            
            //Llamar al servicio
            this.toDoService.addList(this.list);
        }
        
    }

    itemSelected(item:List){
        console.log(item);
    }

    addItem(){
        if(this.nameItem.length === 0){
            return;
        }
        let newItem= new ListItem(this.nameItem);
        this.list.items.push(newItem);
        this.toDoService.saveStorage();
        this.nameItem = '';
    }

    updateTask(item:ListItem){
        item.finish = !item.finish;

        let pendingsTask = this.list.items.filter(itemData => {
            return !itemData.finish;
        }).length;
        if(pendingsTask === 0){
            this.list.finish = true;
            this.list.finishAt = new Date();
        }else{
            this.list.finish = false;
            this.list.finishAt = null;
        }

        this.toDoService.saveStorage();
    }

    deleteTask(idx:number){
        this.list.items.splice(idx,1);
        this.toDoService.saveStorage();
    }
}