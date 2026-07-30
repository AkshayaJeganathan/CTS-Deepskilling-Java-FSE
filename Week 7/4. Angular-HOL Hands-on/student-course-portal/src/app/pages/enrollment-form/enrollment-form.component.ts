import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  // Model object bound to form via ngModel
  formData = {
    studentName: '',
    studentEmail: '',
    courseId: null as number | null,
    preferredSemester: 'Odd',
    agreeToTerms: false
  };

  // Step 46: Submission tracking flag
  submitted: boolean = false;

  // Step 40: Form submission handler
  onSubmit(form: NgForm): void {
    console.log('Form Values:', form.value);
    console.log('Form Validity:', form.valid);

    if (form.valid) {
      this.submitted = true;
    }
  }

  // Step 47: Form reset handler
  onReset(form: NgForm): void {
    form.resetForm({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.submitted = false;
  }
}
