import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface CourseData {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
  enrolled?: boolean;
}

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course!: CourseData;
  @Output() enrollRequested = new EventEmitter<number>();

  // Step 31: Card expansion state
  isExpanded: boolean = false;

  // Step 32: Getter for clean template ngClass binding
  /*
   * Code Comment Explanation:
   * ----------------------------------
   * Using getters for [ngClass] keeps template markup clean, readable, and testable.
   * Complex logic for calculating active class combinations lives cleanly inside TypeScript.
   */
  get cardClasses() {
    return {
      'card--enrolled': !!this.course?.enrolled,
      'card--full': (this.course?.credits || 0) >= 4,
      'expanded': this.isExpanded
    };
  }

  // Step 30: Method returning left border color based on gradeStatus for [ngStyle]
  getBorderColor(): string {
    switch (this.course?.gradeStatus) {
      case 'passed': return '#10b981'; // Green
      case 'failed': return '#ef4444'; // Red
      case 'pending': return '#6b7280'; // Grey
      default: return '#334155';
    }
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnroll(): void {
    if (this.course) {
      this.enrollRequested.emit(this.course.id);
    }
  }
}
