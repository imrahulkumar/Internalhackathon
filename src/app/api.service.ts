import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  signup(data): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/scripbox/signup`,data)
  }

  gethackIdeaList(): Observable<any> {
    let header = new HttpHeaders().set(
      "authorization",
       localStorage.getItem("token")
    );
    return this.http.get(`${this.baseUrl}/api/scripbox/hackathon-list`,{headers:header})
  }


  upVote(data): Observable<any> {
    let header = new HttpHeaders().set(
      "authorization",
       localStorage.getItem("token")
    );
    return this.http.post(`${this.baseUrl}/api/scripbox/upvote`,data,{headers:header})
  }

  createNewIdea(data): Observable<any> {
    let header = new HttpHeaders().set(
      "authorization",
       localStorage.getItem("token")
    );
    return this.http.post(`${this.baseUrl}/api/scripbox/add/hackathon`,data,{headers:header})
  }

}
