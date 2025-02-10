import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESOLVE_ENV } from '../../environments/environment';
import { ENVIRONMENT } from "../../../etc/secrets/environment.prod";



@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient) { }

    getLatestWeatherByWorksiteId(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.WEATHER.GET_LATEST_BY_WORKSITE_ID(id), { headers });
    }
}