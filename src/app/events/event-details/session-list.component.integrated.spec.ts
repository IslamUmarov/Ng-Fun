import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { CollapsibleWellComponent } from "src/app/common"
import { AuthService } from "src/app/user/auth.service"
import { SessionListComponent, UpvoteComponent } from "."
import { DurationPipe } from ".."
import { VoterService } from "./voter.service"

describe('SessionListComponent', () => {
    let mockAuthService, mockVoterService,
        fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugElement: DebugElement

    beforeEach(() => {
        mockAuthService = { isAuthenticated: () => true, currentUser: { userName: "Joe" } }
        mockVoterService = { userHasVoted: () => true }
        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent,
                CollapsibleWellComponent,
                UpvoteComponent,
                DurationPipe
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ]
        });
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        element = fixture.nativeElement;

    })
    describe('initial display', () => {
        it('should have the correct name', () => {
            component.sessions = [
                {
                    name: "Session 1", id: 3, presenter: "Joe", duration: 1, level: "beginner", abstract: "abstract",
                    voters: ["john", "bob"],

                }
            ]
            component.filterBy = "all";
            component.sortBy = "name";
            component.eventId = 4;
            component.ngOnChanges();

            fixture.detectChanges();

            // expect(element.querySelector('[well-title]').textContent).toContain('Session 1')
            expect(debugElement.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1')
        })
    })
})

