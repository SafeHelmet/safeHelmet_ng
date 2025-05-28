import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESOLVE_ENV } from '../../environments/environment';
import { ENVIRONMENT } from "../../../etc/secrets/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class AttendanceService {
    constructor(private http: HttpClient) { }

    getAttendances(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.ATTENDANCES.BASE, { headers });
    }

    getAttendanceById(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.ATTENDANCES.GET_BY_ID(id), { headers });
    }

    getLastAttendance(worker_id: string, worksite_id: string, helmet_id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.ATTENDANCES.GET_LAST_ACTION_BY_WORKER_HELMET_WORKSITE(worker_id, worksite_id, helmet_id), { headers });
    }

    getExistanceAttendance(worker_id: string, worksite_id: string, helmet_id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.ATTENDANCES.CHECK_ATTENDANCE_EXISTANCE(worker_id, worksite_id, helmet_id), { headers });
    }

    getAttendanceByWorksiteId(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.WORKSITE.GET_ATTENDANCES(id), { headers });
    }

    getAttendanceByWorkerId(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.get(RESOLVE_ENV.API.ROUTES.WORKERS.GET_ATTENDANCES(id), { headers });
    }

    createWorkerAttendance(attendancePojo: any): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', ENVIRONMENT.AUTH_TOKEN);
        return this.http.post(RESOLVE_ENV.API.ROUTES.WORKERS.CREATE_WORKER_ATTENDANCE, attendancePojo, { headers });
    }
}