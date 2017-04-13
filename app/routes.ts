import {Routes} from '@angular/router';
import {EventsListComponent} from './events/events-list.component';
import {EventDetailComponent} from './events/event-details/event-details.component';
import{CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service'
export const appRoutes:Routes =[
    {path:'events/new', component:CreateEventComponent},
    {path:'events', component: EventsListComponent},
    {path:'404', component: Error404Component},
    {path:'events/:id', component: EventDetailComponent , canActivate:[EventRouteActivator]} ,// /events/1 or /events/foo
    {path:'', redirectTo:'/events', pathMatch:'full'}// 'prefix' means- redirect if the URL starts with given path .. or 'full' means- fully matched the given path
   
]