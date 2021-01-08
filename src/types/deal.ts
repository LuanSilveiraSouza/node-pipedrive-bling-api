export interface IDeal {
    id: number;
    owner: string;
    person_name: string;
    person_email: string;
    person_phone: string;
    price: number;
    date: string;
}
              
export interface IDealQuery {
    date?: string;
    price?: string;
}