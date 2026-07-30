# Hands-On 4: Template-Driven Forms & Validation

## Objective
Build an interactive Student Enrollment Request form in the `student-course-portal` application using Angular's HTML-centric Template-Driven Forms approach (`FormsModule`, `ngModel`, `ngForm`), implement built-in validation rules, display contextual error feedback, and handle submission and form resets.

## Topics Covered
- **Template-Driven Forms Basics**: HTML-centric form definition with `[(ngModel)]` and `name` attributes.
- **Form Reference (`#enrollForm="ngForm"`)**: Accessing `NgForm` directive instance for validation state checking and resetting.
- **Built-in Validators**:
  - `required` (Name, Email, Course ID, Terms Checkbox)
  - `minlength="3"` (Name)
  - `email` (Email format verification)
- **Contextual Error Messages**: Displaying field errors conditionally when controls are `touched` (`#nameCtrl="ngModel"`).
- **Form State CSS Classes**: Styling `.ng-invalid.ng-touched` (Red borders) and `.ng-valid.ng-touched` (Green borders).
- **Form Submission & Reset**: Logging form values to console and clearing state via `enrollForm.resetForm()`.

## Technologies Used
- Angular v17+ / v20.0
- TypeScript
- `FormsModule`
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
4. Visit `http://localhost:4200/enroll`

## Expected Output
- Route `/enroll` loads the Enrollment Request Form.
- Submitting an empty or invalid form is prevented; the "Submit Request" button remains disabled until all required fields pass validation.
- Interacting with fields and blurring highlights invalid fields with red borders and valid fields with green borders.
- Submitting a valid form displays a green success alert banner (`Enrollment request submitted successfully!`) and logs the structured form JSON to the browser console.
- Clicking "Reset Form" clears all inputs and resets validation error states.
