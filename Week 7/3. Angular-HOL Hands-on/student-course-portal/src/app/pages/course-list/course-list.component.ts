import { Component, OnInit } from '@angular/core';
import { CourseData } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // Step 25: Loading state indicator
  isLoading: boolean = true;

  // Step 27: Course array with gradeStatus property
  courses: CourseData[] = [
    { id: 101, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed', enrolled: true },
    { id: 102, name: 'Full-Stack Web Development', code: 'CS102', credits: 4, gradeStatus: 'pending', enrolled: false },
    { id: 103, name: 'Database Management Systems', code: 'CS103', credits: 3, gradeStatus: 'passed', enrolled: true },
    { id: 104, name: 'Cloud Computing Fundamentals', code: 'CS104', credits: 3, gradeStatus: 'failed', enrolled: false },
    { id: 105, name: 'Software Engineering Principles', code: 'CS105', credits: 1, gradeStatus: 'pending', enrolled: false }
  ];

  selectedCourseId: number | null = null;

  ngOnInit(): void {
    // Step 25: Simulate async data fetching delay of 1.5 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  /* 
   * Step 26: trackBy Implementation & Performance Comment:
   * ----------------------------------------------------
   * Without trackBy, Angular destroys and re-creates all DOM elements in the list on array mutation.
   * By returning a unique identifier (course.id), Angular only updates the specific DOM elements 
   * that changed, significantly improving rendering performance on large lists.
   */
  trackByCourseId(index: number, course: CourseData): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
    const target = this.courses.find(c => c.id === courseId);
    if (target) {
      target.enrolled = !target.enrolled;
    }
  }
}
