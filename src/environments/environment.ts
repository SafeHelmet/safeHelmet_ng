import { ENVIRONMENT } from "../../etc/secrets/environment.prod";



export const RESOLVE_ENV = {
    API: {
        BASE_URL: ENVIRONMENT.API_URL,
        ROUTES: {
            WORKSITE: {
                BASE: `${ENVIRONMENT.API_URL}/api/v1/worksites`,
                GET_BY_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/worksites/${id}`,
                CREATE: `${ENVIRONMENT.API_URL}/api/v1/worksites`,
                UPDATE: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/worksites/${id}`,
                DELETE: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/worksites/${id}`,
                GET_WORKERS: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/worksites/${id}/workers`,
                GET_READINGS: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/worksites/${id}/readings`,
                ASSIGN_WORKER: `${ENVIRONMENT.API_URL}/api/v1/worksites/assign-worker`,
                GET_ATTENDANCES: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/worksites/${id}/attendance`,
            },
            READING: {
                BASE: `${ENVIRONMENT.API_URL}/api/v1/readings`,
                GET_BY_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/readings/${id}`,
                GET_WORKER: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/readings/${id}/worker`,
                GET_WORKSITE: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/readings/${id}/worksite`,
            },
            HELMETS: {
                BASE: `${ENVIRONMENT.API_URL}/api/v1/helmets`,
                GET_BY_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/helmets/${id}`,
                UPDATE: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/helmets/${id}`,
                DELETE: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/helmets/${id}`,
                GET_HELMET_CATEGORIES: `${ENVIRONMENT.API_URL}/api/v1/helmets/helmet-categories`,
                GET_CATEGORY_BY_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/helmets/helmet-categories/${id}`,
            },
            WORKERS: {
                BASE: `${ENVIRONMENT.API_URL}/api/v1/workers`,
                GET_BY_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/workers/${id}`,
                UPDATE: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/workers/${id}`,
                DELETE: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/workers/${id}`,
                GET_WORKSITES: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/workers/${id}/worksite`,
                GET_READINGS: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/workers/${id}/readings`,
                GET_ATTENDANCES: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/workers/${id}/attendance`,
                CREATE_WORKER_ATTENDANCE: `${ENVIRONMENT.API_URL}/api/v1/workers/attendance`,
            },
            WEATHER: {
                GET_LATEST_BY_WORKSITE_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/weather/${id}/last`
            },
            BOSSES: {
                BASE: `${ENVIRONMENT.API_URL}/api/v1/bosses`,
                GET_BY_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/bosses/${id}`,
                UPDATE: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/bosses/${id}`,
                DELETE: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/bosses/${id}`,
            },
            ATTENDANCES: {
                BASE: `${ENVIRONMENT.API_URL}/api/v1/attendance`,
                GET_BY_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/attendance/${id}`,
                GET_LAST_ACTION_BY_WORKER_HELMET_WORKSITE: (worker_id: string, worksite_id: string, helmet_id: string) => `${ENVIRONMENT.API_URL}/api/v1/attendance/attendance-details/${worker_id}/${worksite_id}/${helmet_id}`,
                CHECK_ATTENDANCE_EXISTANCE: (worker_id: string, worksite_id: string, helmet_id: string) => `${ENVIRONMENT.API_URL}/api/v1/attendance/check-existance/${worker_id}/${worksite_id}/${helmet_id}`,
            }
        }
    }
}; 