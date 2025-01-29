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
            },
            READING: {
                BASE: `${ENVIRONMENT.API_URL}/api/v1/readings`,
                GET_BY_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/readings/${id}`,
            },
            HELMETS: {
                BASE: `${ENVIRONMENT.API_URL}/api/v1/helmets`,
                GET_BY_ID: (id: string) => `${ENVIRONMENT.API_URL}/api/v1/helmets/${id}`,
            }
        }
    }
}; 