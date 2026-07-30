import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveEnrollmentFormComponent } from './reactive-enrollment-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ReactiveEnrollmentFormComponent', () => {
  let component: ReactiveEnrollmentFormComponent;
  let fixture: ComponentFixture<ReactiveEnrollmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveEnrollmentFormComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveEnrollmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate courseId when starting with XX', () => {
    const courseIdControl = component.enrollForm.get('courseId');
    courseIdControl?.setValue('XX101');
    expect(courseIdControl?.errors?.['noCourseCode']).toBeTrue();
  });
});
