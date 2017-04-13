"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var event_service_1 = require('./shared/event.service');
var toastr_service_1 = require('../common/toastr.service');
var EventsListComponent = (function () {
    function EventsListComponent(eventService, toastr) {
        this.eventService = eventService;
        this.toastr = toastr;
    }
    EventsListComponent.prototype.ngOnInit = function () {
        this.events = this.eventService.getEvents();
    };
    EventsListComponent.prototype.toastrClick = function (event) {
        this.toastr.success(event.name);
    };
    EventsListComponent.prototype.handleEventClicked = function (data) {
        console.log(data, ' :recieved');
    };
    EventsListComponent = __decorate([
        core_1.Component({
            selector: 'events-list',
            template: "\n<div>\n<h1>Upcoming angular 2 Events</h1>\n<hr/>\n  <div class=\"row\">\n  <div class=\"col-md-5\" *ngFor=\"let eventlocal of events\">\n  <events-thumbnail  (click)=\"toastrClick(eventlocal)\" [event]=\"eventlocal\"></events-thumbnail>\n  </div>\n</div>\n  <!-- <events-thumbnail #thumbnail (eventClick)=\"handleEventClicked($event)\" [event]=\"event1\"></events-thumbnail> -->\n  <!-- '[event]' name should match the @input event of events-thumbnail -->\n   <!-- <h1>{{thumbnail.someproperty}}</h1> \n  <button class=\"btn btn-primary\" (click)=\"thumbnail.logfoo()\">let's foo</button>-->\n</div>\n"
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, toastr_service_1.ToastrServices])
    ], EventsListComponent);
    return EventsListComponent;
}());
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map