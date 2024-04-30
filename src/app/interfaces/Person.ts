import { Anthropometry } from "./Anthropometry";
import { City } from "./City";
import { Club } from "./Club";
import { League } from "./League";
import { Role } from "./Role";

export interface PersonalState {
    id: number,
    photo: string,
    age: number,
    name: string,
    surname: string,
    patronymic: string | null,
    gender: string,
    birth: string | Date | null,
    phone: string,
    email: string,
    balance: number,
    city: string | null,
    address: string | null,
    club: Club | null,
    league: League | null,
    coach: Person | null,
    relatives: Person[],
    user_roles: Role[],
    anthropometry: Anthropometry,
    token: null | string
}

export interface Person {
    id: number,
    photo: string,
    age: number,
    name: string,
    surname: string,
    patronymic: string | null,
    gender: string,
    birth: Date | null,
    phone: string,
    email: string,
    city: City | null,
}