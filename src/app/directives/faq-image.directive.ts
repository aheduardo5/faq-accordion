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
  @Input('faqImage') faqExpanded!: boolean;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.faqExpanded) {
      this.elementRef.nativeElement.src = 'assets/images/icon-minus.svg';
    } else {
      this.elementRef.nativeElement.src = 'assets/images/icon-plus.svg';
    }
  }
}
