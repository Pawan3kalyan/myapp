import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  data:any= [];
  fliterTerm:any='';
  order:any='';
  column:any="";
  page:any="";
  limit:any=""
  
  getData():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
  };
  getfilteredvehicles(filterTerm:any):Observable<any>{
    return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?filter='+filterTerm);
  };
getsortvehicles(order:any,column:any):Observable<any>{
    return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?sortBy='+column+'&order='+order);
}
getpushvehicles(page:any,limit:any):Observable<any>{
  return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?page='+page+'&limit='+limit);
}
  constructor(private httpClient:HttpClient) { };

}
