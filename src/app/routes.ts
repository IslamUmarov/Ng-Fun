import { Routes } from "@angular/router";
import {
  EventDetailsComponent,
  EventRouterActivator,
  EventListResolverService,
  EventsListComponent,
} from "./events/index";
import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from "./events/create-event.component";
export const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"],
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventListResolverService },
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouterActivator],
  },
  { path: "404", component: Error404Component },
  { path: "", pathMatch: "full", redirectTo: "/events" },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
];
