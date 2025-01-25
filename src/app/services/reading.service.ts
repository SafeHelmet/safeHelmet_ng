import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESOLVE_ENV } from '../../environments/environment';
import { AUTH_TOKEN } from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class ReadingService {
    constructor(private http: HttpClient) {}

    getReadings(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.READING.BASE, { headers });
    }

    getReadingsById(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.READING.GET_BY_ID(id), { headers });
    }
}