import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(public crudService: CrudService) { }

  ngOnInit() {
    this.products = [
      {id: 12, name: "Product 1", description: "", price: 123, quantity: 12.12},
      {id: 13, name: "Product 2", description: "", price: 123, quantity: 12.12},
      {id: 14, name: "Product 3", description: "", price: 123, quantity: 12.12},
      {id: 15, name: "Product 4", description: "", price: 123, quantity: 12.12},
      {id: 16, name: "Product 5", description: "", price: 123, quantity: 12.12},
    ];

    return;
    try{
      this.crudService.getAll().subscribe((data: Product[])=>{
        console.log(data);
        this.products = data;
      })
    }
    catch(err){
      console.log(err);
    }
  }
}
