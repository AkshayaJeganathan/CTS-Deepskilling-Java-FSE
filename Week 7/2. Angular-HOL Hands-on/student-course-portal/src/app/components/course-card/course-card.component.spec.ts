import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = { id: 101, name: 'Angular Development', code: 'CS201', credits: 4 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit enrollRequested event when button is clicked', () => {
    spyOn(component.enrollRequested, 'emit');
    component.onEnroll();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(101);
  });
});
