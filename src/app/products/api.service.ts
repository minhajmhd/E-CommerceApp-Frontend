import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchKey = new BehaviorSubject('')
  // to share stream of data

  constructor(private Http:HttpClient) {}
    getAllProducts(){
      return this.Http.get('http://localhost:3000/all-products')  // products json data
    }

}
