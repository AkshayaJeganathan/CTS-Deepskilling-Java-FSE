import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Step 11: String interpolation property
  portalName: string = 'Student Course Portal';

  // Step 12: Property binding target
  isPortalActive: boolean = true;

  // Step 13: Event binding target & message container
  message: string = '';

  // Step 14: Two-way data binding target
  searchTerm: string = '';

  /* 
   * Step 15: Code Comment Explanation:
   * ----------------------------------
   * [property] Binding (One-Way Data Flow):
   * Component -> DOM. Data flows strictly from the TypeScript component property to the template element.
   * Changes in the DOM do NOT update the component class property automatically.
   *
   * [(ngModel)] Binding (Two-Way Data Flow):
   * Component <-> DOM. Syntactic sugar combining property binding [ngModel]="prop" and event binding (ngModelChange)="prop=$event".
   * Updating the input in the DOM immediately updates the TypeScript property, and updating the property in TypeScript immediately updates the DOM input element.
   */

  // Step 16: Lifecycle hook - ngOnInit
  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
  }

  // Step 17: Lifecycle hook - ngOnDestroy
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // Step 13: Method triggered by click event binding
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
