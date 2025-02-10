export interface Worker {
    id?: number;
    name: string;
    surname: string;
    fiscal_code: string;
    email: string;
    password: string;
    phone: string;
    active: boolean;
    created_at?: Date;
    updated_at?: Date;
} 