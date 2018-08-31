import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") color: string;

  constructor(private elmRef: ElementRef) {
  }

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.color || 'yellow');
  }

  @HostListener('mouseleave') mousesalio() {
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.elmRef.nativeElement.style.backgroundColor = color;
  }
}
