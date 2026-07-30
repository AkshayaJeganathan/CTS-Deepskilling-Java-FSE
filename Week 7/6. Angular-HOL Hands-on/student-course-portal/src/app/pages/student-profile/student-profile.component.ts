import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses: Course[] = [];

  // Step 66: Inject EnrollmentService into StudentProfileComponent
  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    // Step 66: Retrieve enrolled courses list using getEnrolledCourses()
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }

  refreshList(): void {
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }
}
