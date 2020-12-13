import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouterActivator implements CanActivate {
  constructor(private eventService: EventService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const eventExists = !!this.eventService.getEvent(+route.params["id"]);

    if (!eventExists) this.route.navigate(["/404"]);
    return eventExists;
  }
}
