import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESOLVE_ENV } from '../../environments/environment';
import { ENVIRONMENT } from "../../../etc/secrets/environment.prod";



@Injectable({
    providedIn: 'root'
})
export class BossService {
    constructor(private http: HttpClient) { }

    addBoss(bossPojo: any): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.post(RESOLVE_ENV.API.ROUTES.BOSSES.BASE, bossPojo, { headers });
    }

    getBossById(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.BOSSES.GET_BY_ID(id), { headers });
    }

    editBossById(id: string, boss: any): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.put(RESOLVE_ENV.API.ROUTES.BOSSES.UPDATE(id), boss, { headers });
    }

    deleteBoss(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.delete(RESOLVE_ENV.API.ROUTES.BOSSES.DELETE(id), { headers });
    }

    getAllBosses(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.BOSSES.BASE, { headers });
    }
}