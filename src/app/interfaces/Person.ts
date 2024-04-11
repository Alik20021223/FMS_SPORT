import { Anthropometry } from "./Anthropometry";
import { City } from "./City";
import { Club } from "./Club";
import { Role } from "./Role";

export interface PersonalState {
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
    balance: number,
    city: City | null,
    club: Club | null,
    coach: Person | null,
    family: Person[],
    roles: Role[],
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