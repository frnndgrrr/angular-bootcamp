import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]',
  standalone: true,
})
export class CapitalizeDirective {

  constructor(private readonly element: ElementRef<HTMLElement>) { }

  ngOnInit() {
    const str = this.element.nativeElement.innerText;

    this.element.nativeElement.innerText = str[0].toUpperCase() + str.slice(1);
  }
}
