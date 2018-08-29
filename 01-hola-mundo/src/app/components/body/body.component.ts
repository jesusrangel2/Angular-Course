import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{

    show = true;

    phrase:any = {
        message: 'Big power needs great responsability';
        author: 'Ben Parker';
    }

    characters:string[] = ['Spidermar', 'Venom', 'Dr. Octopus']

}
