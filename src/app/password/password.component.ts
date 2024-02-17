import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent 
  {
     

  checkPassword(password: any) : boolean {
    const hasUpperCase = password.match(2);
    const hasLowerCase = password.match(3);
    const hasDigit = password.match(2);
    const hasSpecialSymbol = password.match(1);

    if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialSymbol) {
      return true;
    } else {
      return false;
    }
  }
}


