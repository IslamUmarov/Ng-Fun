import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared'

@Component({
  templateUrl: './create-event.component.html',
    styles:[`
  em {float: right; color:#E05C65; padding-left:10px;}
  .error input { background-color:#E3C3C5;}
  .error ::-webkit-input-placeholder {color: #999;}
  .error ::-moz-placeholder {color: #999;}
  .error :-moz-placeholder {color: #999;}
  .error :-ms-input-placeholder {color: #999;}
  `]
})
export class CreateEventComponent implements OnInit{
  newEvent
  event: any;
  isDirty:boolean = true
  constructor(private router: Router, private eventService: EventService) {

  }
  ngOnInit(){
    this.event = {
      name: 'Ng Spectacular',
      date: '8/8/2028',
      time: 799.99,
      location: {
        address: '456 Happy St',
        city: 'Felicity',
        country: 'Angularistan'
      },
      onlineUrl: 'http://ngSomething.com',
      imageUrl: 'http://ngSomething.com/logo.png'
    }
  }

saveEvent(fromValues){

  this.eventService.saveEvent(fromValues)
  this.isDirty = false;
  this.router.navigate(['/events'])
}

  cancel() {
    this.router.navigate(['/events'])
  }
}