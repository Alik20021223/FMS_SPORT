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
    family: any[],
    anthropometry: any
}