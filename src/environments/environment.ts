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
                GET_READINGS: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/worksites/${id}/readings`
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
            },
            WORKERS: {
                BASE: `${ENVIRONMENT.API_URL}/api/v1/workers`,
                GET_BY_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/workers/${id}`,
                UPDATE: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/workers/${id}`,
                DELETE: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/workers/${id}`
            },
            WEATHER: {
                GET_LATEST_BY_WORKSITE_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/weather/last/${id}`
            }
        }
    }
}; 