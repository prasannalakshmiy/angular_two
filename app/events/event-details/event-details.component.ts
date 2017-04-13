import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
@Component ({
    templateUrl:'/app/events/event-details/event-details.component.html',
    styles:[`
    .container{ padding-left:20px; padding-right:20px; }
    .event-image{height:100px;}
    `]

})
export class EventDetailComponent implements OnInit{
event:any
    
constructor(private eventService:EventService, private route: ActivatedRoute){

}

ngOnInit (){
this.event = this.eventService.getEvent(+this.route.snapshot.params['id']); // '+' makes the thing as a number ... id here must be same as the one in the route

}
}