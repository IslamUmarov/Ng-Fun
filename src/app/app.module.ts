import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouterActivator,
  EventListResolverService,
} from "./events/index";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [
    EventService,
    EventRouterActivator,
    EventListResolverService,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(
      "You have not save this event, do you really want to cancel? "
    );
  return true;
}
