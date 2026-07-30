# Hands-On 1: Environment Setup, Project Structure & First Component

## Objective
The objective of this hands-on exercise is to set up the Angular CLI development environment, scaffold the foundational `student-course-portal` application, understand every CLI-generated workspace file, and construct core page components (`HeaderComponent`, `HomeComponent`, `CourseListComponent`, `StudentProfileComponent`).

## Topics Covered
- Angular CLI & Workspace Setup (`ng new`, `ng serve`, `ng build`)
- Angular Project Structure & Files (`angular.json`, `tsconfig.json`, `main.ts`, etc.)
- Angular Module Architecture (`AppModule`, component declarations)
- Creating & Organizing Components
- Bundle Size Budgets in `angular.json`

## Technologies Used
- Angular v17+ / v20.0
- TypeScript
- HTML5 / CSS3
- Angular CLI

## Project Structure
```
1. Angular-HOL Hands-on/
└── student-course-portal/
    ├── angular.json
    ├── package.json
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── tsconfig.spec.json
    ├── notes.txt
    └── src/
        ├── main.ts
        ├── index.html
        ├── styles.css
        └── app/
            ├── app.component.ts|html|css|spec.ts
            ├── app.module.ts
            ├── app-routing.module.ts
            ├── components/
            │   └── header/
            └── pages/
                ├── home/
                ├── course-list/
                └── student-profile/
```

## Setup & Running Commands
1. Navigate to project directory:
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
4. Open browser at `http://localhost:4200`

5. Build for production:
   ```bash
   ng build
   ```

## Expected Output
- Web browser displays navigation header bar (`Student Course Portal`) with links to Home, Courses, Profile.
- Home page renders welcome header, summary description, and stats row showing:
  - **Courses Available:** 12
  - **Enrolled:** 3
  - **GPA:** 3.8
- `notes.txt` contains detailed explanations for all 8 core workspace configuration files and budget settings.
