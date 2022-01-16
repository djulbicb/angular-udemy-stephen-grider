import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClasses]'
})
export class ClassesDirective {

  constructor(private element: ElementRef) {}

  @Input('appClasses') set classNames(classObj: any) {
    this.element.nativeElement.style.backgroundColor = classObj;
    
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
