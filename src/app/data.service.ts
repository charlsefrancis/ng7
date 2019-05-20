import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getUsers() {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  firstClick() { 
    return this.http.get('https://reqres.in/api/users')
  }  
}
