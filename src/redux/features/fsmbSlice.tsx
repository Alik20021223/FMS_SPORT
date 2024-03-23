'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface PersonalState {
    id: number,
    name: string,
    surname: string,
    secondName: string,
    male: string,
    dateBirth: Date,
    numberPhone: number,
    email: string,
}

const initialState: PersonalState = {
    id: 1,
    name: 'Иван',
    surname: 'Иванов',
    secondName: 'Иванович',
    male: 'man',
    dateBirth: new Date('1995-12-04'),
    numberPhone: 992924440521,
    email: 'alik20021223@mail.ru'
}

export const fsmb = createSlice({
    name: 'fsmb',
    initialState,
    reducers: {
        // increment: (state) => { state.value++ },
        // decrement: (state) => { state.value-- },
    }
})

export const {} = fsmb.actions
export default fsmb.reducer