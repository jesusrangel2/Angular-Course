import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(imgs: any[]): string {
    
    if(!imgs){
      return "assets/noimage.png.";
    }

    if(imgs.length > 0){
      return imgs[0].url;
    }else{
      return "assets/noimage.png";
    }
    
    
  }

}
