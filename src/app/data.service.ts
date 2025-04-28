import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{User } from './models/user.model';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http'; // Import HttpClient from Angular's HTTP client module

@Injectable({
  providedIn: 'root'
})
export class DataService {


  privateApiUrl='https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }
  getUsers  ():Observable<User[]>{
    return this.http.get<User[]>(this.privateApiUrl);

  }
  // getuser(){
  //  return  [
  //     { id: 1, name: 'Amar Sharma', email: 'amar@example.com' },
  //     { id: 2, name: 'Ravi Kumar', email: 'ravi@example.com' },
  //     { id: 3, name: 'Priya Verma', email: 'priya@example.com' }
  //   ];
  // }
}
