import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  test(){
    alert("clicked")
  };
  test1(){
    alert('dbclick')
  };
  test2(){
    alert('keypress')
  }
  keyup(){
    alert('keyup')
  }
  mouseenter(){
    alert('mouse enter')
  }
  name='abc';


}
