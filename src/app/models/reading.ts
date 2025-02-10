import { Helmet } from "./helmet";

export interface Reading {
    id?: number,
    read_at?: string,
    temperature: number,
    humidity: number,
    brightness: number,
    methane: boolean,
    carbon_monoxide: boolean,
    smoke_detection: boolean,
    uses_welding_protection: boolean,
    uses_gas_protection: boolean,
    avg_X: number,
    avg_Y: number,
    avg_Z: number,
    avg_G: number,
    std_X: number,
    std_Y: number,
    std_Z: number,
    std_G: number,
    max_G: number,
    incorrect_posture: number,
    anomaly: boolean,
    helmet_id?: number,
    Helmet?: Helmet
}