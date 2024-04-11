import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent implements OnInit {
  // @Input() customer:Customer = new Customer();
  private _customerData :Customer;
  @Input()
  set customer(customer: Customer) {
    //You can add some custom logic here
    this._customerData = customer;
    console.log("Input set name:" + this._customerData.name)
    console.log("Input set address:" + this._customerData.address)
  }
  get customer(): Customer {
    return this._customerData; 
  }
  @Output() customerChange:EventEmitter<Customer> =new EventEmitter<Customer>(); 

  constructor() { }
 
  ngOnInit() {
  }

  updateInChild() {
    console.log("updateInChild CC before the emit:" + this.customer.address)
    this.customerChange.emit(this.customer);
    console.log("updateInChild CC after the emit:" + this.customer.address)
  }
}
