import { Component, Input } from '@angular/core';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course!: Course;

  // Step 65: Inject EnrollmentService into CourseCardComponent
  constructor(private enrollmentService: EnrollmentService) {}

  isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  // Step 65: Toggle enrollment status on click
  toggleEnrollment(): void {
    if (this.isEnrolled()) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
  }
}
