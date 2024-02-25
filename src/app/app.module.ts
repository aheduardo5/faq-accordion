import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaqAccordionCardComponent } from './faq-accordion-card/faq-accordion-card.component';
import { FooterComponent } from './footer/footer.component';
import { FaqImageDirective } from './directives/faq-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    FaqAccordionCardComponent,
    FooterComponent,
    FaqImageDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
