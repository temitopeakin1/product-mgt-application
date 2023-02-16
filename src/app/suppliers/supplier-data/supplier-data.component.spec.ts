import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDataComponent } from './supplier-data.component';

describe('SupplierDataComponent', () => {
  let component: SupplierDataComponent;
  let fixture: ComponentFixture<SupplierDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
