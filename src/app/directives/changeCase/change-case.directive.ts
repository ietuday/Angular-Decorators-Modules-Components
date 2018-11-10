import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {
  @Input('appChangeCase') case: string;

  @HostListener('blur') onblur(){
    /**
     * using dom value
     */
    // this.eleRef.nativeElement.value = this.eleRef.nativeElement.value.toUpperCase();

    /**
     * using renderer if dom is not available
     */

     let changedValue: string = this.case === 'upper' ? this.eleRef.nativeElement.value.toUpperCase() : this.eleRef.nativeElement.value.toLowerCase();
     console.log(changedValue);
     console.log(this.case);

     
     this.renderer.setProperty(this.eleRef.nativeElement, 'value', changedValue);
  }

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    console.log('Inside ChangeCaseDirective constructor');
   }

  ngOnInit(){
    console.log(this.eleRef.nativeElement.value);
    
  }



}
