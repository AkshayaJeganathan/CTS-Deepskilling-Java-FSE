import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentProfileComponent } from './student-profile.component';
import { EnrollmentService } from '../../services/enrollment.service';
import { CourseService } from '../../services/course.service';

describe('StudentProfileComponent', () => {
  let component: StudentProfileComponent;
  let fixture: ComponentFixture<StudentProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileComponent ],
      providers: [ EnrollmentService, CourseService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
