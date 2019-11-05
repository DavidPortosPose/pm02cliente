import { Directive, Input, OnInit, ElementRef, Renderer2} from '@angular/core';
const claseCss = 'textoFab';
@Directive({
  selector: '[appTextoFab]'
})
export class TextoFabDirective implements OnInit {
  @Input('appTextoFab') texto: string;

  constructor(private element: ElementRef,  private renderer: Renderer2) {
  }

  ngOnInit(){
    this.renderer.addClass(this.element.nativeElement, claseCss);
  }

}