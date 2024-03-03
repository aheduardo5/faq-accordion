import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaqAccordionCardComponent } from './faq-accordion-card/faq-accordion-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, FaqAccordionCardComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
