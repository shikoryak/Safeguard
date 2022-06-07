import { Component } from '@angular/core';
interface Benefit {
  count: string;
  currency: string;
  description: string;
}
interface Experience {
  number: string;
  title: string;
  description: string;
}
interface Work {
  title: string;
  description: string;
  link: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  benefits: Benefit[] = [
    {
      count: '3.5',
      currency: 'Billions',
      description: 'Preventive measurements implemented (cost reduction, loss of investment).'
    },
    {
      count: '25+',
      currency: 'Years',
      description: 'Of experience in minimizing risk and protecting assets.'
    },
    {
      count: '1.5',
      currency: 'Billions',
      description: 'Of experience in minimizing risk and protecting assets.'
    }
  ]
  experienceList: Experience[] = [
    {
      number: '25+',
      title: 'years of experience',
      description: 'In handling legal issues.'
    },
    {
      number: '230',
      title: 'signature strategies',
      description: 'Developed for our clients.'
    },
    {
      number: '145',
      title: 'corporate clients',
      description: 'We helped thus far.'
    },
    {
      number: '30',
      title: 'employees working',
      description: 'For your legal security.'
    }
  ]

  ourWorks: Work[] = [
    {
      title: 'Safeguarding our <br> clients',
      description: 'Discretion is key, therefore we have converted all our case studies without mentioning our clients names.',
      link: 'See Case Studies'
    },
    {
      title: "Let's meet & explore<br>options together",
      description: "We're here to help and answer any question you might have. We look forward to hearing from you.",
      link: 'Contack Us'
    },
    {
      title: 'Discover where we<br>came from',
      description: "We're here to help and answer any question you might have. We look forward to hearing from you.",
      link: 'Our Timeline'
    }
  ]
}
