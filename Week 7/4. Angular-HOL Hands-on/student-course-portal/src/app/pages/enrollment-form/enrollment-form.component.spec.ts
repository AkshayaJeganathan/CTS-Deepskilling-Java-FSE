import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrollmentFormComponent } from './enrollment-form.component';
import { FormsModule } from '@angular/forms';

describe('EnrollmentFormComponent', () => {
  let component: EnrollmentFormComponent;
  let fixture: ComponentFixture<EnrollmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true on valid form submission', () => {
    const mockForm: any = { valid: true, value: { studentName: 'John' } };
    component.onSubmit(mockForm);
    expect(component.submitted).toBeTrue();
  });
});
