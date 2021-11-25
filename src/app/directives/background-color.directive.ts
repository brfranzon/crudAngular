import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[backgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('elementRef: ', elementRef);
    //this.elementRef.nativeElement.style.backgroundColor = "yellow";
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#000')

  }

}
