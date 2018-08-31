import {Injectable} from '@angular/core';
import { List } from '../models';


@Injectable()
export class ToDoServices{
    
    lists: List[];

    constructor(){
        this.loadStorage();
    }

    addList(list:List){
        this.lists.push(list);
        this.saveStorage;
    }

    saveStorage(){
        localStorage.setItem('data', JSON.stringify(this.lists));
    }

    loadStorage(){
        if(localStorage.getItem('data') ){
            this.lists = JSON.parse(localStorage.getItem('data'));
        }else{
            this.lists = [];
        }
    }

    deleteList(list:List){
        
        this.lists = this.lists.filter(listData =>{
            return listData.id !== list.id
        });

        this.saveStorage();
    }
}
