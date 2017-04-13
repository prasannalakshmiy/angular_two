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
//@Input says that the event will be passed from another Component
var EventsThumbnailComponent = (function () {
    function EventsThumbnailComponent() {
        this.someproperty = "some property variable";
        this.eventClick = new core_1.EventEmitter();
    }
    EventsThumbnailComponent.prototype.handleClickMe = function () {
        /* this.eventClick.emit("foo");*/
        this.eventClick.emit(this.event.name); //@Input event 
    };
    EventsThumbnailComponent.prototype.logfoo = function () {
        console.log("let's foo clicked");
    };
    EventsThumbnailComponent.prototype.getStartTimeClass = function () {
        //    const isEarlystart = this.event && this.event.time == '8:00 am';
        //    return {green:isEarlystart , bold:isEarlystart};
        if (this.event && this.event.time == '8:00 am')
            return ['green', 'bold'];
        return [];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EventsThumbnailComponent.prototype, "event", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EventsThumbnailComponent.prototype, "eventClick", void 0);
    EventsThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'events-thumbnail',
            template: "\n  \n    <div [routerLink]=\"['/events',event.id]\" class=\"well hoverwell thumbnail\">\n    <h2>{{event?.name}}</h2>\n    <div>Date:{{event?.date}}</div>\n     <div [ngClass]=\"getStartTimeClass()\" [ngSwitch]=\"event?.time\">Time:{{event?.time}}\n        <span *ngSwitchCase=\"'8:00 am'\"> (Early start)</span>\n        <span *ngSwitchCase=\"'10:00 am'\"> (Late start)</span>\n        <span *ngSwitchDefault> (Normal start)</span>\n   </div> \n     <div>Price:${{event?.price}}</div>\n     <div>  \n     <span [hidden]=\"!event.location?.address\">Location:{{event?.location?.address}}</span>\n     \n     <span class=\"pad-left\">{{event?.location?.city}},{{event?.location?.country}}</span>\n     </div>\n     <div *ngIf = \"event?.LocationUrl\"> LocationUrl:{{event?.LocationUrl}}</div>\n     <!-- <button class=\"btn btn-primary\" (click)=\"handleClickMe()\">Click me!</button> --> \n     </div>\n     ",
            /* templateUrl:'app/events/events-list.component.html',*/
            styles: [" \n                .green {color: #003300 !important;}\n                .bold{ font-weight: bold;}\n                 .thumbnail {min-height:210px;}\n                 .well div{ color:#bbb;}\n                 .pad-left{margin-left : 10px;}\n     "]
        }), 
        __metadata('design:paramtypes', [])
    ], EventsThumbnailComponent);
    return EventsThumbnailComponent;
}());
exports.EventsThumbnailComponent = EventsThumbnailComponent;
//# sourceMappingURL=events-thumbnail.component.js.map