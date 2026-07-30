import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// Step 53: Custom Synchronous Validator
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value || '').trim();
  if (value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Step 55: Custom Asynchronous Validator
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const email = String(control.value || '').toLowerCase();
      if (email.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  submitted: boolean = false;

  // Step 49: Inject FormBuilder
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Step 49: Build reactive form model using FormBuilder
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      // Step 55: Apply async validator simulateEmailCheck as 3rd argument
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      // Step 53: Apply custom sync validator noCourseCode
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      // Step 52 note: Validators.requiredTrue validates checkbox is true
      agreeToTerms: [false, Validators.requiredTrue],
      // Step 56: FormArray for repeating dynamic controls
      additionalCourses: this.fb.array([])
    });
  }

  // Step 57: Typed getter for FormArray
  /*
   * Code Comment Explanation:
   * ----------------------------------
   * Using a strongly-typed TypeScript getter (`get additionalCourses()`) is cleaner and less error-prone
   * than casting in HTML templates (`(enrollForm.get('additionalCourses') as FormArray)`).
   * It provides IDE autocomplete, strict type checking, and keeps template syntax clean.
   */
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Step 56: Method to push a new FormControl into FormArray
  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  // Step 56: Method to remove a control from FormArray by index
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Step 51 & 52: Form submission handler
  onSubmit(): void {
    /* 
     * Step 52: Code Comment Explanation:
     * ----------------------------------
     * Difference between enrollForm.value and enrollForm.getRawValue():
     * - enrollForm.value: Excludes values of controls that are disabled (`control.disabled = true`).
     * - enrollForm.getRawValue(): Includes all control values regardless of whether controls are enabled or disabled.
     */
    console.log('enrollForm.value (excludes disabled):', this.enrollForm.value);
    console.log('enrollForm.getRawValue() (includes all):', this.enrollForm.getRawValue());

    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }

  onReset(): void {
    this.enrollForm.reset({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.additionalCourses.clear();
    this.submitted = false;
  }
}
