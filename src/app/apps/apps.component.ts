import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // calculator
  fvalue = NaN ;
  svalue = NaN ;
  ans = NaN ;
  Ans=""
  sum(){
    this.Ans="Sum :"
    this.ans=(this.fvalue+this.svalue)
  }
  sub(){
    this.Ans="Sub :"
    this.ans=(this.fvalue-this.svalue)
  }
  mul () {
    this.Ans="mul :"
    this.ans=(this.fvalue*this.svalue)
  }
  div(){
    this.Ans="div :"
    this.ans=(this.fvalue/this.svalue)
  }

// Rectangle
  height = NaN ;
  width=NaN;
  rect="";
  // caluculation
  answer = NaN ;
  area(){
    this.rect=("Area : ");
    this.answer=(this.height*this.width);
    
  }
  peri(){
    this.rect=("Perimeter : ")
    this.answer=((this.height+this.width)*2)
  }
  // event registration
  names=['eswar'];
  name="eswar";
  submit(){
    this.names.push(this.name)
  }

// cart...............
  product="";
  quantity = NaN ;
  price = NaN ;

  products:any=[];
  
  Submit(){
    var object:any={};
    object.product=this.product;
    object.quantity=this.quantity;
    object.price=this.price;
    this.products.push(object)
  }

  // add account

  Name="";
  email="";
  phone = NaN ;
  city="";

  accounts:any=[];
  add(){
    var obj:any={};
    obj.Name=this.Name;
    obj.email=this.email;
    obj.phone=this.phone;
    obj.city=this.city;
    this.accounts.push(obj)
  }


}
