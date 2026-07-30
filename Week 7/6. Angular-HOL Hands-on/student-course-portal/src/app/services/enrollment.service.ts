import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  // Step 63: Enrolled course ID tracker state
  private enrolledCourseIds: number[] = [101, 103]; // Hardcoded initial enrollments

  // Step 64: Service-to-service injection (CourseService injected into EnrollmentService)
  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  // Resolves enrolled IDs to full Course objects via CourseService
  getEnrolledCourses(): Course[] {
    const allCourses = this.courseService.getCourses();
    return allCourses.filter(course => this.enrolledCourseIds.includes(course.id));
  }
}
