import { Component, Input, Output, EventEmitter } from '@angular/core'
//@Input says that the event will be passed from another Component
@Component({
    selector: 'events-thumbnail',
   template: `
  
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date:{{event?.date}}</div>
     <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time:{{event?.time}}
        <span *ngSwitchCase="'8:00 am'"> (Early start)</span>
        <span *ngSwitchCase="'10:00 am'"> (Late start)</span>
        <span *ngSwitchDefault> (Normal start)</span>
   </div> 
     <div>Price:\${{event?.price}}</div>
     <div>  
     <span [hidden]="!event.location?.address">Location:{{event?.location?.address}}</span>
     
     <span class="pad-left">{{event?.location?.city}},{{event?.location?.country}}</span>
     </div>
     <div *ngIf = "event?.LocationUrl"> LocationUrl:{{event?.LocationUrl}}</div>
     <!-- <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button> --> 
     </div>
     `,
     /* templateUrl:'app/events/events-list.component.html',*/
     styles:[ ` 
                .green {color: #003300 !important;}
                .bold{ font-weight: bold;}
                 .thumbnail {min-height:210px;}
                 .well div{ color:#bbb;}
                 .pad-left{margin-left : 10px;}
     ` ]
})

export class EventsThumbnailComponent {
    @Input() event: any // 'any' says the data type .. if the data type is "any" it means it dosen't care about the datatype //... it is something like structures in C language
    someproperty : any = "some property variable"
    @Output() eventClick = new EventEmitter()

    handleClickMe() {
       /* this.eventClick.emit("foo");*/
        this.eventClick.emit(this.event.name);//@Input event 
    }
    logfoo() {
        console.log("let's foo clicked");
    }
   getStartTimeClass(){
    //    const isEarlystart = this.event && this.event.time == '8:00 am';
    //    return {green:isEarlystart , bold:isEarlystart};

    if(this.event && this.event.time == '8:00 am')
          return ['green', 'bold'];
        return []
   }
}