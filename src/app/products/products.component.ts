import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any=[];
  constructor(private productService:ProductService){
    productService.getProducts().subscribe(
      (data:any): void=>{
        this.products=data;
      },
      (error:any)=>{
        alert("internal server problem")
      }
    )
   }
  ishide=true;
  onclick(){
    this.ishide=!this.ishide;
  }
 
  ngOnInit(): void {
  }

}

