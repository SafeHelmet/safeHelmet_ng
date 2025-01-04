export interface Worksite {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    latitude: number;
    longitude: number;
    start_date_of_work: Date;
    end_date_of_work: Date;
    created_at: Date;
    description: string;
    active: boolean;
} 