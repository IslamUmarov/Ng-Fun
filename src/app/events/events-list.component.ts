import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  template: `
  <div>
    <event-thumbnail [event]="event1"></event-thumbnail>
  </div>
  `,
  styles: [`
  .well div {
    color: red;
  }
  `]
})
export class EventsListComponent{
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: Date.now(),
    time: '10:00 am',
    imageURL: 'assets/images/angularconnect-shield.png',
    price: '55.44',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}




