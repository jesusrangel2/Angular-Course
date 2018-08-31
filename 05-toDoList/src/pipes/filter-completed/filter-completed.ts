import {Pipe, PipeTransform} from '@angular/core';
import { List } from '../../models/list-model';

@Pipe({
    name: 'filterCompleted',
    pure: false
})

export class FilterCompletedPipe implements PipeTransform{

    transform(lists:List[], finished:boolean){
        
        return lists.filter(list => {
            return list.finish === finished
        });
    }

}