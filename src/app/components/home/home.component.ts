import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resultClt: Customer[]=[];

  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      (response:any)=>{
        this.resultClt = response;
      },(error)=>{
        console.log(error);
      }
    )
  }

}
