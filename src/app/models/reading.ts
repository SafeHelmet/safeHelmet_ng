import { Helmet } from "./helmet";

export interface Reading {
    id?: number,
    read_at?: string,
    helmet_id?: number,
    sensor1?: number,
    sensor2?: number,
    sensor3?: number,
    anomalous?: boolean,
    Helmet?: Helmet
}