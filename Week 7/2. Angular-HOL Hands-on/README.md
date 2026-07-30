# Hands-On 2: Data Binding, Lifecycle Hooks & Component Communication

## Objective
Make the `student-course-portal` dynamic by implementing Angular's four core data binding types (interpolation, property binding, event binding, two-way binding), key component lifecycle hooks (`ngOnInit`, `ngOnDestroy`, `ngOnChanges`), and parent-child component communication via `@Input` and `@Output` decorators.

## Topics Covered
- **Interpolation (`{{ }}`)**: Rendering component class properties dynamically in HTML.
- **Property Binding (`[disabled]`)**: Binding DOM element properties to TypeScript expressions.
- **Event Binding (`(click)`)**: Listening to DOM events and executing component methods.
- **Two-Way Binding (`[(ngModel)]`)**: Syncing template input controls bidirectionally with TypeScript models.
- **Lifecycle Hooks**:
  - `ngOnInit`: Component initialisation logic & console logging.
  - `ngOnDestroy`: Cleanup & navigation destroy logging.
  - `ngOnChanges`: Monitoring `@Input` property value updates via `SimpleChanges`.
- **Component Communication**:
  - `@Input`: Passing parent course objects down to child `CourseCardComponent`.
  - `@Output` with `EventEmitter`: Emitting enrollment requests up to parent `CourseListComponent`.

## Technologies Used
- Angular v17+ / v20.0
- TypeScript
- HTML5 / CSS3
- `FormsModule`

## Project Structure
```
2. Angular-HOL Hands-on/
└── student-course-portal/
    ├── src/app/
        ├── components/
        │   ├── header/
        │   └── course-card/
        │       ├── course-card.component.ts|html|css|spec.ts
        └── pages/
            ├── home/
            │   ├── home.component.ts (4 bindings + ngOnInit/ngOnDestroy)
            ├── course-list/
            │   ├── course-list.component.ts (*ngFor, @Output handler)
            └── student-profile/
```

## Running Instructions
1. Navigate to project:
   ```bash
   cd student-course-portal
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch application:
   ```bash
   ng serve
   ```

## Expected Output
- Typing in the search input on the Home page updates `Searching for: <text>` in real time.
- Clicking **Enroll Now** displays `"Enrollment opened!"`.
- Browser console outputs `'HomeComponent initialised — courses loaded'` on load and `'HomeComponent destroyed'` upon navigation.
- Course list renders 5 distinct course cards. Clicking **Enroll** on any card logs the course ID in console and updates the selected course banner at the bottom of the list.
