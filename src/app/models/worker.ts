export interface Worker {
    id?: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
} 