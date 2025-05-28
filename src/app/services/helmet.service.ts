import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESOLVE_ENV } from '../../environments/environment';
import { ENVIRONMENT } from "../../../etc/secrets/environment.prod";



@Injectable({
    providedIn: 'root'
})
export class HelmetService {
    constructor(private http: HttpClient) { }

    addHelmet(helmetPojo: any): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.post(RESOLVE_ENV.API.ROUTES.HELMETS.BASE, helmetPojo, { headers });
    }

    getHelmetById(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.HELMETS.GET_BY_ID(id), { headers });
    }

    editHelmetById(id: string, helmet: any): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.put(RESOLVE_ENV.API.ROUTES.HELMETS.UPDATE(id), helmet, { headers });
    }

    deleteHelmet(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.delete(RESOLVE_ENV.API.ROUTES.HELMETS.DELETE(id), { headers });
    }

    getHelmetCategories(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.HELMETS.GET_HELMET_CATEGORIES, { headers });
    }

    getCategoryById(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.HELMETS.GET_CATEGORY_BY_ID(id), { headers });
    }
}