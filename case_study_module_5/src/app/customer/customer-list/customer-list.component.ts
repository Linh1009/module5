import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../../model/ICustomer';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ICustomerType} from '../../model/ICustomerType';
import {Observable} from "rxjs";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  customerDelete: ICustomer = {};

  page = 1;

  constructor(private customerService: CustomerServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.customerService.getAllCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }
  getCustomerDelete(customer: ICustomer) {
    this.customerDelete = customer;
  }
  deleteCustomer(id: number) {
    this.customerService.deleteById(id).subscribe(() => {
    }, (error) => {
      console.log(error);
    }, () => {
      this.ngOnInit();
    });
  }

}
