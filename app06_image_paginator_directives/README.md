Direktive sluze za modifikovanje strukture template html koda
mogu biti 
- strukturalne direktive
- property direktive

property direktiva
```
ng generate directive classes
```

# Property direktiva : Custom
```
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
```
Postoje vise nacina kako se zadaje direktiva. Ovde je confusing nacin pozivanja zato sto mora `appClasses [param1]="value1" [param2]="value2"`
```
<div appClasses [param1]="value1" [param2]="value2"></div>
@Input() param1:string;
@Input() param2:string;
```

pa umesto toga se prepocuje upotraba alijasa
```
<div [appClasses]="value1"></div>
@Input('appClasses') set classNames(classObj: any)
```

Setter se koristi kako bi se aktivirao sa svakom promenom.
Inace direktiva bi se pozvala samo jednom u konstruktoru, kad su propertiji null

# Structural directive : Custom
> .html
```
 <p *appFor="3; let i = index; let val = something;">My name is {{val}}</p>
```
> .ts
```
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appFor') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
        something : "Bojan"
      });
    }
  }
}
```

# NgSwitch
```
<div [ngSwitch]="currentIndex">
    <div *ngSwitchCase="0">
        Hello
    </div>
    <div *ngSwitchCase="0">
        First page
    </div>
    <div *ngSwitchCase="1">
        This is another page
    </div>
</div>
```