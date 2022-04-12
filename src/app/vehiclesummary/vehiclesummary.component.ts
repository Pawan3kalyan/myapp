import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehiclesummary',
  templateUrl: './vehiclesummary.component.html',
  styleUrls: ['./vehiclesummary.component.css']
})
export class VehiclesummaryComponent implements OnInit {
  data: any = [];
  filterTerm:any="";
  order:any="";
  coiumn:any="";
  page:any="";
  limit:any="";

  constructor(private vehicleService: VehicleService) 
  {
      vehicleService.getData().subscribe(
        (data:any)=>{
          this.data=data;
        },
        (error:any)=>{
          alert("internal server error")
        }
      )
    
  }


filter(){
  this.vehicleService.getfilteredvehicles(this.filterTerm).subscribe(
    (data:any)=>{
      this.data=data;
    },
  )
}



sort(){
  this.vehicleService.getsortvehicles(this.order,this.column).subscribe(
    (data:any)=>{
      this.data=data;
    },
  )
}



  column(order: any, column: any) {
    throw new Error('Method not implemented.');
  }

push(){
    this.vehicleService.getpushvehicles(this.page,this.limit).subscribe(
      (data:any)=>{
        this.data=data;
      },
    )
  }
  

  ngOnInit(): void {
  }

}
