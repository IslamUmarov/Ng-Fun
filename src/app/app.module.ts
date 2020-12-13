import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
