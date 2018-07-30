import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isFirstOpen = true;
  current;

  accordionItems: Array<any>;
  events: Array<any>;
  news: Array<any>;
  companies: Array<any>;
  procedures: Array<any>;
  links: Array<any>;
  groups: Array<any>;

  constructor() {
    if (this.isFirstOpen) {
      this.current = 0;
    }
  }

  ngOnInit() {

    this.accordionItems = [
      {
        "title": "Accordion 1",
        "description": "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttito."
      },
      {
        "title": "Accordion 2",
        "description": "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttito."
      },
      {
        "title": "Accordion 3",
        "description": "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttito."
      }
    ];

    this.events = [
      {
        "date": "10/12/2016",
        "description": "Zorgmarathon"
      },
      {
        "date": "12/12/2016",
        "description": "Beurs"
      },
      {
        "date": "30/12/2016",
        "description": "Onze zorgevenement"
      }
    ];

    this.news = [
      {
        "image": "../../assets/images/news/1.png",
        "date": "29/02/2016",
        "text": "Zorgmarathon",
        "likes": 4
      },
      {
        "image": "../../assets/images/news/2.png",
        "date": "29/02/2016",
        "text": "VIO erkend als theoretisch goed",
        "likes": 1
      },
      {
        "image": "../../assets/images/news/3.png",
        "date": "29/02/2016",
        "text": "Commissiebrief over nieuwe Wlz",
        "likes": 2
      }
    ];

    this.companies = [
      {
        "image": "../../assets/images/logos/1.png",
        "name": "Youforce"
      },
      {
        "image": "../../assets/images/logos/2.png",
        "name": "MIP-meldingen"
      },
      {
        "image": "../../assets/images/logos/3.png",
        "name": "Topdesk"
      }
    ];

    this.procedures = [
      {
        "name": "Klachtenprocedure",
        "type": "bijgewerk",
        "date": "18-04-2016"
      },
      {
        "name": "Periodieke test gebruikersgroepen",
        "type": "bijgewerk",
        "date": "10-02-2016"
      },
      {
        "name": "Dienstrichtlijn tweede niveau",
        "type": "bijgewerk",
        "date": "09-05-2015"
      }
    ];

    this.links = [
      {
        "url": "http://zrggroep.nl",
        "text": "Zorggroep.nl"
      },
      {
        "url": "http://zorgvisie.nl",
        "text": "Zorgvisie.nl"
      },
      {
        "url": "http://medicalfacts.nl",
        "text": "Medicalfacts.nl"
      }
    ];

    this.groups = [
      {
        "image": "../../assets/images/groups/1.png",
        "name": "HRM"
      },
      {
        "image": "../../assets/images/groups/2.png",
        "name": "Marketing & Communicatie"
      }
    ];

  }
  
}
