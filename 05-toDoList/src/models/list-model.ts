import { ListItem } from './list-item-model';

export class List{

    id:number;
    title:string;
    createAt:Date;
    finishAt:Date;
    finish:boolean;
    items:ListItem[];
    

    constructor(tilte:string){
        this.title = this.title;
        
        this.finish=false;
        this.createAt= new Date();
        this.items = [];

        this.id = new Date().getTime();
    }
}