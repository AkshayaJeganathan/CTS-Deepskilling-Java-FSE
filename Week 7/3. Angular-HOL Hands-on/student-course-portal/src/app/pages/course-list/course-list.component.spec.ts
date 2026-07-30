import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListComponent, CourseCardComponent, CreditLabelPipe, HighlightDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isLoading to false after 1.5 seconds', fakeAsync(() => {
    expect(component.isLoading).toBeTrue();
    tick(1500);
    expect(component.isLoading).toBeFalse();
  }));
});
