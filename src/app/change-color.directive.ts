import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {
  @Input() inputColor: String;

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = this.inputColor;
  }
}
