import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  // Step 60: Inject CourseService into CourseListComponent
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    // Step 60: Fetch courses array from injected CourseService
    this.courses = this.courseService.getCourses();
  }
}
