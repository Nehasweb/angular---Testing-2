import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayAddComponent } from './array-add.component';

describe('ArrayAddComponent', () => {
  let component: ArrayAddComponent;
  let fixture: ComponentFixture<ArrayAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrayAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('addition of two arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    
    const component = new ArrayAddComponent();
    expect(component.addArrays(arr1, arr2)).toEqual([5, 7, 9]);
  });
});

