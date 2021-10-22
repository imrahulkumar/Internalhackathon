import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://scripbox-hackathon.herokuapp.com';

  constructor(private readonly http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/scripbox/login`,data)
  }
}
