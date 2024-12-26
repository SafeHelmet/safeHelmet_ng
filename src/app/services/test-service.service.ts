import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  constructor(private http: HttpClient) { }

  getTest() {
    const headers = new HttpHeaders({
      'Accept': 'application/json, text/plain, */*'
    });

    return this.http.get('', { headers });
  }
}

