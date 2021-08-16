import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../shared/event.model";

@Component({
    selector: "session-list",
    templateUrl: "./session-list.component.html",
})
export class SessionListComponent implements OnChanges {
    ngOnChanges(): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }
    filterSessions(filterBy: string) {
        if (filterBy === 'all') {
            this.visibleSession = this.sessions.slice(0);
        }
        else {
            this.visibleSession = this.sessions.filter((session: ISession) => {
                return session.level.toLocaleLowerCase() === filterBy.toLocaleLowerCase();
            });
        }
    }

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSession: ISession[] = [];

}