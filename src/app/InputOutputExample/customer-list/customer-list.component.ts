import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  customers: Customer[] = [
 
    {customerNo: 1, name: 'Rahuld Dravid', address: '', city: 'Banglaore', state: 'Karnataka', country: 'India'},
    {customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India'},
    {customerNo: 3, name: 'Saurrav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India'},
    {customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India'},
    {customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India'},
 
  ]

  selectedCustomer:Customer = new Customer();
  
  edit(customer:Customer) {
    this.selectedCustomer=Object.assign({},customer)
    console.log("Edit");
  }
  
  update(customer:Customer  ) {
    console.log("update PC:" + customer.address)
    var cust=this.customers.find(e => e.customerNo==customer.customerNo)
    var savedCustomer=Object.assign(cust,customer)
    alert("Customer Saved :" + savedCustomer.name)
  }
}
