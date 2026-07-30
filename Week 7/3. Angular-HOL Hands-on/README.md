# Hands-On 3: Directives & Pipes — Built-in and Custom

## Objective
Extend HTML functionality in the `student-course-portal` application using Angular's built-in structural directives (`*ngIf`, `*ngFor`, `*ngSwitch`), attribute directives (`[ngClass]`, `[ngStyle]`), and create a custom directive (`HighlightDirective`) and custom pipe (`CreditLabelPipe`).

## Topics Covered
- **Structural Directives**:
  - `*ngIf`: Conditional loading spinner (`isLoading`) with `setTimeout` delay.
  - `*ngIf` with `#noCourses` template fallback (`<ng-template>`).
  - `*ngFor` with `trackBy: trackByCourseId` to optimize array list rendering.
  - `*ngSwitch`: Conditional grade status badges (Passed, Failed, Pending).
- **Attribute Directives**:
  - `[ngClass]`: Dynamic getter `cardClasses` applying `card--enrolled`, `card--full`, and `expanded`.
  - `[ngStyle]`: Setting dynamic left border colors based on `gradeStatus`.
- **Custom Directive (`HighlightDirective`)**:
  - Hover background highlight using `@HostListener('mouseenter')` and `@HostListener('mouseleave')`.
  - Configurable background color via `@Input() appHighlight`.
- **Custom Pipe (`CreditLabelPipe`)**:
  - Transforming numeric credits into human-readable text (`1 Credit`, `2 Credits`, `No Credits`).

## Technologies Used
- Angular v17+ / v20.0
- TypeScript
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

## Expected Output
- Loading spinner displays for 1.5 seconds on the Course List page before loading cards.
- Grade status badges render with corresponding color codes (Green for Passed, Red for Failed, Grey for Pending).
- Hovering over any course card applies a custom highlight background via `appHighlight`.
- Credit values display formatted strings via `creditLabel` pipe (e.g., `4 Credits`).
- Clicking "Show Details" toggles the card height and reveals extended details.
