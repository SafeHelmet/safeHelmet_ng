import { Category } from './category';

export interface Helmet {
    id?: number;
    category_id: number;
    created_at?: string; 
    Category?: Category;
    mac_address: string;
}
