import { Component } from '@angular/core';
import { CourseData } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  // Step 22: Define a courses array with 5 course objects
  courses: CourseData[] = [
    { id: 101, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4 },
    { id: 102, name: 'Full-Stack Web Development', code: 'CS102', credits: 4 },
    { id: 103, name: 'Database Management Systems', code: 'CS103', credits: 3 },
    { id: 104, name: 'Cloud Computing Fundamentals', code: 'CS104', credits: 3 },
    { id: 105, name: 'Software Engineering Principles', code: 'CS105', credits: 2 }
  ];

  // Step 23: Selected course ID tracker
  selectedCourseId: number | null = null;

  // Step 23: Event handler for child @Output emission
  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
