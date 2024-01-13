import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProducts2Component } from './list-products.component';

describe('ListProductsComponent', () => {
  let component: ListProducts2Component;
  let fixture: ComponentFixture<ListProducts2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProducts2Component]
    });
    fixture = TestBed.createComponent(ListProducts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
