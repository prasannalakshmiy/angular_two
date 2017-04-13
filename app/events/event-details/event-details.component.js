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
var event_service_1 = require('../shared/event.service');
var router_1 = require('@angular/router');
var EventDetailComponent = (function () {
    function EventDetailComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']); // '+' makes the thing as a number ... id here must be same as the one in the route
    };
    EventDetailComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/events/event-details/event-details.component.html',
            styles: ["\n    .container{ padding-left:20px; padding-right:20px; }\n    .event-image{height:100px;}\n    "]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.ActivatedRoute])
    ], EventDetailComponent);
    return EventDetailComponent;
}());
exports.EventDetailComponent = EventDetailComponent;
//# sourceMappingURL=event-details.component.js.map