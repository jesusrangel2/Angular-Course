import {Component} from '@angular/core';
import { ToDoServices } from '../../services/todo.services';
import { List } from '../../models/list-model';


@Component({

    selector:'page-finished',
    templateUrl: 'finished.component.html'
})
export class FinishedPage{

    constructor(public todoList:ToDoServices){

    }

    itemSelected(item:List){
        console.log(item);
    }

}