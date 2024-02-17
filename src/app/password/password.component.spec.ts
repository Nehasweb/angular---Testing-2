import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordComponent } from './password.component';

describe('PasswordComponent', () => {
  let component: PasswordComponent;
  let fixture: ComponentFixture<PasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
     
     it('should check password is valid', () => {
      const component = new PasswordComponent();
      expect(component.checkPassword('ADmin@123')).toBe(true);
     });
        
     it('should check password is invalid', () => {
      const component = new PasswordComponent();
      expect(component.checkPassword('Admin@12')).toBe(false);
     });
      
});




