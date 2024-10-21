import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentTransferComponent } from './child-parent-transfer.component';

describe('ChildParentTransferComponent', () => {
  let component: ChildParentTransferComponent;
  let fixture: ComponentFixture<ChildParentTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildParentTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildParentTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
