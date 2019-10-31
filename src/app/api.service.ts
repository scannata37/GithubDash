import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  apiUrl = 'https://api.github.com/users/scannata37';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUrl);
  }
}
