import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-summary-widget',
  template: `
    <div class="summary-widget">
      <h3>📊 Live Course Summary Widget</h3>
      <p>Total Available Courses Shared via Singleton Service: <strong>{{ courses.length }}</strong></p>
      <button (click)="addNewCourse()" class="btn-add-sample">+ Add Sample Course (Tests Singleton State)</button>
    </div>
  `,
  styles: [`
    .summary-widget { background-color: var(--card-bg); border: 1px solid var(--border-color); padding: 1rem 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem; }
    h3 { font-size: 1.1rem; color: var(--accent-color); margin-bottom: 0.5rem; }
    p { font-size: 0.95rem; color: var(--text-main); margin-bottom: 0.75rem; }
    .btn-add-sample { background-color: rgba(6, 182, 212, 0.2); color: var(--accent-color); padding: 0.4rem 0.8rem; border-radius: 0.375rem; font-weight: 600; border: 1px solid var(--accent-color); }
  `]
})
export class CourseSummaryWidgetComponent implements OnInit {
  courses: Course[] = [];

  // Step 62: Inject shared CourseService singleton
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  addNewCourse(): void {
    const id = Date.now();
    this.courseService.addCourse({
      id,
      name: `New Elective ${this.courses.length + 1}`,
      code: `CS${Math.floor(Math.random() * 800 + 100)}`,
      credits: 3,
      gradeStatus: 'pending'
    });
  }
}
