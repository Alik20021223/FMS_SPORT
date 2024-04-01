'use client'

import { PersonalState } from "@/app/interfaces/Person"
import { createSlice } from "@reduxjs/toolkit"

const initialState: PersonalState = {
    id: 0,
    photo: '',
    age: 0,
    name: '',
    surname: '',
    patronymic: '',
    gender: '',
    birth: new Date(),
    phone: '',
    email: '',
    balance: 0,
    family: [],
    anthropometry: undefined
}

export const fsmb = createSlice({
    name: 'fsmb',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id
            state.photo = action.payload.photo
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.patronymic = action.payload.patronymic
            state.gender = action.payload.gender
            state.phone = action.payload.phone
            state.email = action.payload.email
            state.birth = action.payload.birth
            state.balance = action.payload.balance
            state.family = action.payload.family
            state.anthropometry = action.payload.anthropometry
        }
    }
})

export const {setUser} = fsmb.actions

export default fsmb.reducer