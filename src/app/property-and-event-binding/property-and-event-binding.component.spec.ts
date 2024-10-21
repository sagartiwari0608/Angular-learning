import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAndEventBindingComponent } from './property-and-event-binding.component';

describe('PropertyAndEventBindingComponent', () => {
  let component: PropertyAndEventBindingComponent;
  let fixture: ComponentFixture<PropertyAndEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyAndEventBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyAndEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
