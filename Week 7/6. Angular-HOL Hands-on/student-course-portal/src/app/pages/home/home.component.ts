import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  liveCourseCount: number = 0;

  // Step 61: Inject CourseService into HomeComponent
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    // Step 61: Read live course count from shared service
    this.liveCourseCount = this.courseService.getCourses().length;
  }
}
