'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { Fsmb } from "../login/fsmb";

import 'react-phone-input-2/lib/material.css'

import axios from "axios";
import { useRouter } from 'next/navigation';
import PhoneInput from "react-phone-input-2";

interface FormData {
    login: string;
}

export default function Login() {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [patronymic, setpatronymic] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [isClick, setClick] = useState<number>(0);

    useEffect(() => {
        if (localStorage.getItem(btoa('token'))) {
            return router.push('/profile')
        }
    }, [])

    const handleInputPhone = (e: React.FormEvent<HTMLInputElement>, value: string) => {
        e.preventDefault();
        setPhone(value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password == rePassword) {
            axios.post('/api/register', {
                email: email,
                name: name,
                surname: surname,
                password: password,
                patronymic: patronymic,
                phone: phone,
            }).then((res: any) => {
                axios.post('/api/login', { email: email, password: password }).then((res: any) => {
                    localStorage.setItem(btoa('token'), res.data.token);

                    axios.post('/api/anthropometry', {
                        "weight": 0,
                        "height": 0,
                        "shoes": 0,
                        "helmet": 0,
                        "head": 0,
                        "armor": 0
                    }, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
                        }
                    }).then((res: any) => {
                        router.push('/profile')
                    });
                });
            });
            setClick(1)
        } else alert('Пароли не совпадают!')
    };



    return (
        <section className="loginSection">
            <Link href="/login" className="absolute top-5 right-16 text-sm text-[#155783] font-medium">Уже есть аккаунт?
                <span className="font-bold"> Войти.</span>
            </Link>
            <div className="pr-[50px] pl-[44px] flex gap-[50px] pb-6 pt-[80px]">

                <Fsmb />
                <div className={`px-[61px]  shadow-2xl pt-[46px] ${!isClick ? `pb-[73px]` : `pb-[22px]`}`} >
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center relative">
                        <h3 className="text-[20px] font-medium leading-[22px] text-[#155783] mb-[36px]">Регистрация</h3>
                        <div className="w-[367px] flex flex-col">
                            <input
                                type="text"
                                className={`focus-visible:border-none border-b-2 text-[15px] mb-[32px]`}
                                placeholder="Фамилия"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                            <input
                                type="text"
                                className={`focus-visible:border-none border-b-2 text-[15px] mb-[32px]`}
                                placeholder="Имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                className={`focus-visible:border-none border-b-2 text-[15px] mb-[32px]`}
                                placeholder="Отчество"
                                value={patronymic}
                                onChange={(e) => setpatronymic(e.target.value)}
                            />
                            <input
                                type="email"
                                className={`focus-visible:border-none border-b-2 text-[15px] mb-[32px]`}
                                placeholder="Введите электронную почту(оно будет логином)"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                className={`focus-visible:border-none border-b-2 text-[15px] mb-[32px]`}
                                placeholder="Придумайте пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="password"
                                className={`focus-visible:border-none border-b-2 text-[15px] mb-[15px]`}
                                placeholder="Повторите пароль"
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                            />

                            <PhoneInput
                                containerClass="w-full mb-[32px]"

                                country={'ru'}
                                value={phone}
                                onChange={phone => setPhone(phone)}
                                inputProps={{ required: true }}
                            />


                            <button className="bg-[#155783] py-[11px] uppercase rounded-full font-semibold text-white lowercase">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                            {isClick ? (
                                <div className={`flex flex-col justify-start items-start ${isClick && `mt-[42px]`}`}>
                                    <div className="mb-6 flex ">
                                        <input className="mr-2 w-[17px] h-[17px]" type="checkbox" name="" id="politic-conf" />
                                        <label className="text-xs" htmlFor="politic-conf">Я принимаю условия
                                            Пользовательского соглашения и даю своё согласие
                                            на обработку моей персональной информации на
                                            условиях, определенных Политикой кониденциальности.
                                        </label>
                                    </div>
                                    <div className="flex">
                                        <input className="mr-2 w-[17px] h-[17px]" type="checkbox" name="" id="email-res" />
                                        <label className="text-xs" htmlFor="email-res">Я не хочу получать рекламу и другие предложения
                                            данного сервиса
                                        </label>
                                    </div>
                                </div>
                            ) : ''}
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
}
