# Hands-On 5: Reactive Forms — FormBuilder, FormGroup, FormArray & Custom Validators

## Objective
Rebuild the enrollment request form in the `student-course-portal` application using Angular's Reactive Forms architecture (`ReactiveFormsModule`, `FormBuilder`, `FormGroup`, `FormControl`, `FormArray`), implement custom synchronous and asynchronous validators, and manage dynamic form controls.

## Topics Covered
- **Reactive Forms Setup**: Importing `ReactiveFormsModule` and building form models in TypeScript via `FormBuilder`.
- **FormGroup & FormControl**: Binding reactive form models to templates using `[formGroup]` and `formControlName`.
- **Custom Synchronous Validator (`noCourseCode`)**: Disallowing course IDs starting with `'XX'` prefix.
- **Custom Asynchronous Validator (`simulateEmailCheck`)**: Simulating an HTTP API call with an 800ms `Promise` delay to check if an email contains `'test@'`.
- **Dynamic FormArray (`additionalCourses`)**: Adding and removing dynamic elective course inputs with a strongly-typed TypeScript getter (`get additionalCourses()`).
- **Form Value Inspection**: Code comment explaining the difference between `enrollForm.value` (excludes disabled controls) and `enrollForm.getRawValue()` (includes all controls).

## Technologies Used
- Angular v17+ / v20.0
- TypeScript
- `ReactiveFormsModule`
- HTML5 / CSS3

## Running Instructions
1. Navigate to project:
   ```bash
   cd student-course-portal
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   ng serve
   ```
4. Open browser at `http://localhost:4200/enroll-reactive`

## Expected Output
- Entering `XX101` in the Course Code field triggers the custom error: `"Course code starting with XX is not allowed."`
- Typing `test@example.com` shows `"⏳ Checking email availability..."` for 800ms before returning `"Email address is already taken."`
- Clicking "+ Add Another Course" dynamically appends a new input field to the form array; clicking "Remove" deletes the specific item.
- Submitting logs both `enrollForm.value` and `enrollForm.getRawValue()` to the browser console.
