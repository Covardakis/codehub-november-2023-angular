import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewFormComponent } from './create-new-form.component';

describe('CreateNewFormComponent', () => {
  let component: CreateNewFormComponent;
  let fixture: ComponentFixture<CreateNewFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateNewFormComponent]
    });
    fixture = TestBed.createComponent(CreateNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
