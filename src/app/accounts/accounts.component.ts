import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts:any=[];
  filterTerm:any='';
  constructor(private accountService:AccountService) {
     accountService.getAccount().subscribe(
       (ex:any): void=>{
         this.accounts=ex;
       },
       (error:any)=>{
         alert("internal server error")
       }
     )


      }
      filter(){
        this.accountService.getfilteredaccounts(this.filterTerm).subscribe(
          (ex:any): void=>{
            this.accounts=ex;
        
          },
          (error:any)=>{
            alert("internal server error")
          }
        )
      }
      

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  }
