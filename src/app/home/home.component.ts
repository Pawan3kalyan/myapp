import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isRed = true;
  isBlue=true;
  isYellow=true;
  change() {
    this.isRed = !this.isRed ,
     this.isBlue=!this.isBlue,
     this.isYellow=!this.isYellow
    
  };
 
 

  // hide /shown
  isshown = true;
  
 
  hide() {
    this.isshown = !this.isshown;
  }


}
