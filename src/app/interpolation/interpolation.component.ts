import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  name='pavan';
  num=2022;
  value =true;
   a=undefined;
   array=[1,2,3,4,5,6,7,8,9,10];
   object={
     name:'pavan',
     age:24,
   };
   balance=NaN;
   user=null;
   dob="05/21/1997"
  constructor() { }

  ngOnInit(): void {
  }

}
