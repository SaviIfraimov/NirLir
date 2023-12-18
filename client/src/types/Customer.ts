export interface Customer {
    id: number;
    name: string;
    logo_url?: string;
    contact?: string;
    created_at: Date;
    updated_at?: Date;
}