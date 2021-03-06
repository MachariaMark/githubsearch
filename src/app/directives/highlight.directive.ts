import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onOver() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseout') onOut() {
    this.el.nativeElement.style.backgroundColor = '#fff';
  }

}