import { City } from "./City";
import { Person } from "./Person";

export interface Club {
    id: number,
    name: string,
    city: City,
    address: string,
    phone: string,
    email: string,
    owner: Person,
    description: string,
}