import { Worksite } from "./worksite";

export interface Weather {
    worksite_id: number,
    created_at: string,
    temp: number,
    temp_min: number,
    temp_max: number,
    humidity: number,
    brightness: number,
    c0: number,
    pm10: number,
    Worksite: Worksite
}