import { Component } from '@angular/core'
import {EventService} from './shared/event.service'
import {ToastrServices} from '../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `
<div>
<h1>Upcoming angular 2 Events</h1>
<hr/>
  <div class="row">
  <div class="col-md-5" *ngFor="let eventlocal of events">
  <events-thumbnail  (click)="toastrClick(eventlocal)" [event]="eventlocal"></events-thumbnail>
  </div>
</div>
  <!-- <events-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></events-thumbnail> -->
  <!-- '[event]' name should match the @input event of events-thumbnail -->
   <!-- <h1>{{thumbnail.someproperty}}</h1> 
  <button class="btn btn-primary" (click)="thumbnail.logfoo()">let's foo</button>-->
</div>
`
  //$event is the data emitted with the event in this case it is the string 'foo' which we declared in events-thumbnail.component.ts 
})
export class EventsListComponent{
  events:any[]

constructor(private eventService : EventService, private toastr: ToastrServices){ // injecting the service

}
ngOnInit(){
  this.events = this.eventService.getEvents() 
}
toastrClick(event){
  this.toastr.success(event.name)
}

  handleEventClicked(data) {
    console.log(data, ' :recieved');
  }

}