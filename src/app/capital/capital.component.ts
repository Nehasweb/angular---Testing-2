import { Component } from '@angular/core';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrl: './capital.component.css'
})
export class CapitalComponent 
{
   string : any ;
   countCapital(str: string): number
    {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
        count++;
      }
    }
    return count;
  }
}
