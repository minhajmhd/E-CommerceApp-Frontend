import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  searchterm: string='';

  allProducts:any = []; // array data holding all products
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(
      (data:any) => {
        this.allProducts = data.Products
      }
    )
    this.api.searchKey.subscribe(
      (data:any) => {
        this.searchterm = data
      }
    )

}
}
