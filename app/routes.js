"use strict";
var events_list_component_1 = require('./events/events-list.component');
var event_details_component_1 = require('./events/event-details/event-details.component');
var create_event_component_1 = require('./events/create-event.component');
var _404_component_1 = require('./errors/404.component');
var event_route_activator_service_1 = require('./events/event-details/event-route-activator.service');
exports.appRoutes = [
    { path: 'events/new', component: create_event_component_1.CreateEventComponent },
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: '404', component: _404_component_1.Error404Component },
    { path: 'events/:id', component: event_details_component_1.EventDetailComponent, canActivate: [event_route_activator_service_1.EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' } // 'prefix' means- redirect if the URL starts with given path .. or 'full' means- fully matched the given path
];
//# sourceMappingURL=routes.js.map