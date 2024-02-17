import { Component } from '@angular/core';

@Component({
  selector: 'app-array-add',
  templateUrl: './array-add.component.html',
  styleUrl: './array-add.component.css'
})
export class ArrayAddComponent
 {
    
  
  addArrays(arr1: number[], arr2: number[]): number[]
   {
    const obj = [];
    for (let i = 0; i < arr1.length; i++) {
      obj.push(arr1[i] + arr2[i]);
    }
    return obj;
  }
}


