export interface Worksite {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    latitude: number;
    longitude: number;
    start_date_of_work: string;
    end_date_of_work: string;
    created_at: Date;
    description: string;
    active: boolean;
    temperature_threshold: number,
    humidity_threshold: number,
    brightness_threshold: number,
    posture_threshold: number,
    max_g_threshold: number
} 