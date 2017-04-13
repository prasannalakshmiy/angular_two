import { NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule} from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NavBarComponent } from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrServices} from './common/toastr.service';
import {EventDetailComponent} from './events/event-details/event-details.component';
import {appRoutes} from './routes';
import{CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service'
@NgModule({
imports:[BrowserModule,
RouterModule.forRoot(appRoutes)
],
declarations:[EventsAppComponent, EventsListComponent, EventsThumbnailComponent, NavBarComponent, EventDetailComponent, CreateEventComponent,Error404Component],// REGISTERING THAT I AM A COMPONENT PRESENT FOR USING
providers:[EventService, ToastrServices, EventRouteActivator],
bootstrap:[EventsAppComponent] // A process of telling angular where do i start -- STARTING PLACE
})

export class AppModule{


}