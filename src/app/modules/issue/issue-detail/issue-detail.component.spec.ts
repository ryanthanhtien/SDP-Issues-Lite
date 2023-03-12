import { issueFeatureKey } from "./../../../store/issue/issue.reducer";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { items } from "./../../../constants/mock.data";
import { issue, issues } from "src/app/store/issue/issue.selectors";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IssueDetailComponent } from "./issue-detail.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";
import { IssueState } from "src/app/store/issue";

describe("IssueDetailComponent", () => {
  const initialIssueState: IssueState = {
    issue: null,
    issues: [...items],
  };
  let component: IssueDetailComponent;
  let fixture: ComponentFixture<IssueDetailComponent>;
  let store: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IssueDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: issueFeatureKey,
              value: initialIssueState,
            },
          ],
        }),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: "1000" } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IssueDetailComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore) as MockStore<IssueState>;

    issue.setResult({
      id: "3008",
      title: "Ticket 999",
    });

  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should select the issues list", () => {
    const result = issues.projector(initialIssueState);
    expect(result.length).toEqual(3);
  });

  it("should show title", () => {
    expect(getIssueTitle()).toBe("Ticket 999");
  });

  function getIssueTitle() {
    const elemnt = fixture.debugElement.query(
      By.css("#issue-title")
    ).nativeElement;
    return elemnt.textContent;
  }
});
