import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  apiURL = 'http://192.168.54.211:3000/api';

  constructor(private httpClt: HttpClient) { }

  getCustomers(): Observable<Customer> {
    return this.httpClt.get<Customer>(this.apiURL + '/products');
  }

}
