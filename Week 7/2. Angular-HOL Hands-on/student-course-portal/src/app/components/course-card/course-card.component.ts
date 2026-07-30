import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

export interface CourseData {
  id: number;
  name: string;
  code: string;
  credits: number;
}

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  // Step 18 & 20: @Input decorator passing course object from parent
  @Input() course!: CourseData;

  // Step 21: @Output decorator emitting course ID event to parent
  @Output() enrollRequested = new EventEmitter<number>();

  // Step 18: Lifecycle hook - ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('Course input changed. Previous:', changes['course'].previousValue, 'Current:', changes['course'].currentValue);
    }
  }

  // Emit event trigger
  onEnroll(): void {
    if (this.course) {
      this.enrollRequested.emit(this.course.id);
    }
  }
}
