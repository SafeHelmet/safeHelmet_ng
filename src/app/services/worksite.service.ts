import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESOLVE_ENV } from '../../environments/environment';
import { ENVIRONMENT } from "../../../etc/secrets/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class WorksiteService {
  constructor(private http: HttpClient) {}

  addWorksite(worksiteData: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
    return this.http.post(RESOLVE_ENV.API.ROUTES.WORKSITE.BASE, worksiteData, { headers });
  }

  getWorksites(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
    return this.http.get(RESOLVE_ENV.API.ROUTES.WORKSITE.BASE, { headers });
  }

  getWorksiteById(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
    return this.http.get(RESOLVE_ENV.API.ROUTES.WORKSITE.GET_BY_ID(id), { headers });
  }

  createWorksite(worksite: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
      return this.http.post(RESOLVE_ENV.API.ROUTES.WORKSITE.CREATE, worksite, { headers });
  }

  editWorksite(worksite: any, id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
    return this.http.put(RESOLVE_ENV.API.ROUTES.WORKSITE.UPDATE(id), worksite, { headers });
  }

  updateWorksite(id: string, worksite: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
    return this.http.put(RESOLVE_ENV.API.ROUTES.WORKSITE.UPDATE(id), worksite, { headers });
  }

  deleteWorksite(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
    return this.http.delete(RESOLVE_ENV.API.ROUTES.WORKSITE.DELETE(id), { headers });
  }

  getWorkers(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
    return this.http.get(RESOLVE_ENV.API.ROUTES.WORKSITE.GET_WORKERS(id), { headers });
  }

  getHelmets(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
    return this.http.get(RESOLVE_ENV.API.ROUTES.HELMETS.BASE, { headers });
  }
} 
