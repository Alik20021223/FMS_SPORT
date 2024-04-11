'use client'

import { PersonalState } from "@/app/interfaces/Person"
import { Role } from "@/app/interfaces/Role"
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState: PersonalState = {
    id: 0,
    photo: '',
    age: 0,
    name: '',
    surname: '',
    patronymic: '',
    gender: '',
    birth: null,
    phone: '',
    email: '',
    balance: 0,
    city: null,
    club: null,
    coach: null,
    family: [],
    roles: [],
    anthropometry: {
        weight: 0,
        height: 0,
        shoes: 0,
        armor: 0,
        head: 0,
        helmet: 0,
    },
    token: null
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
            // Role reset
            state.roles = action.payload.roles.map((role: Role) => {
                switch (role.roles) {
                    case "admin":
                        role.roles = "Админ"
                        break;
                    case "athlet":
                        role.roles = "Спортсмен"
                        break;
                    case "manager":
                        role.roles = "Менеджер"
                        break;
                    case "guest":
                        role.roles = "Гость"
                        break;
                    case "judge":
                        role.roles = "Судья"
                        break;
                    case "clubHead":
                        role.roles = "Глава клуба"
                        break;
                    case "parent":
                        role.roles = "Родитель"
                        break;
                    defaut:
                        role.roles = "Неизвестная роль"
                        break;
                }
                return role
            })
            state.anthropometry = action.payload.anthropometry
            state.token = localStorage.getItem(btoa('token'))
        },
        checkToken: (state) => {
            state.token = localStorage.getItem(btoa('token'))
        },
        logout: (state) => {
            localStorage.clear();
        },
        updateAnthropometry: (state, action) => {
            state.anthropometry = action.payload.anthropometry
            new Promise(() => {
                axios.put('/api/anthropometry', action.payload.anthropometry, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
                    }
                }).then(res => {
                })
            })
        }
    }
})

export const {
    setUser,
    checkToken,
    logout,
    updateAnthropometry
} = fsmb.actions

export default fsmb.reducer