export interface Worker {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
} 