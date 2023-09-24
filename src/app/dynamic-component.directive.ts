import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicComponentDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input() set appDynamicComponent(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}




