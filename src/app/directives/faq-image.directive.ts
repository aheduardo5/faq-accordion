import {
  Directive,
  ElementRef,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { faqInterface } from '../interfaces/faq.interface';

@Directive({
  selector: '[FaqImage]',
})
export class FaqImageDirective implements OnChanges {
  @Input('faqImage') faq!: faqInterface;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.faq.expanded) {
      this.elementRef.nativeElement.src = 'assets/images/icon-minus.svg';
    } else {
      this.elementRef.nativeElement.src = 'assets/images/icon-plus.svg';
    }
  }
}
