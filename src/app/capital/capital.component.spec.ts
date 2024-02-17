import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalComponent } from './capital.component';

describe('CapitalComponent', () => {
  let component: CapitalComponent;
  let fixture: ComponentFixture<CapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should count the number of capital letters in a string', () => {

    component.string= ' ';

    expect(component.countCapital('Neha Gholap')).toBe(2);
  });
});



  