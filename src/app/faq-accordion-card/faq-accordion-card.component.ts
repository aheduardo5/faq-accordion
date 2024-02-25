import { Component } from '@angular/core';
import { faqInterface } from '../interfaces/faq.interface';

@Component({
  selector: 'faq-accordion-card',
  templateUrl: './faq-accordion-card.component.html',
  styleUrls: ['./faq-accordion-card.component.scss'],
})
export class FaqAccordionCardComponent {
  title: string = 'FAQs';
  faqArray: faqInterface[] = [
    {
      id: 1,
      question: 'What is Frontend Mentor, and how will it help me?',
      imgSvg: '',
      imgDescription: '',
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      expanded: false,
    },
    // {
    //   id: 2,
    //   question: 'Is Frontend Mentor free?',
    //   imgSvg: '',
    //   imgDescription: '',
    //   answer:
    //     'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    //   expanded: false,
    // },
    // {
    //   id: 3,
    //   question: 'Can I use Frontend Mentor projects in my portfolio?',
    //   imgSvg: '',
    //   imgDescription: '',
    //   answer:
    //     "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    //   expanded: false,
    // },
    // {
    //   id: 4,
    //   question: 'Can I use Frontend Mentor projects in my portfolio?',
    //   imgSvg: '',
    //   imgDescription: '',
    //   answer:
    //     "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    //   expanded: false,
    // },
  ];
}
