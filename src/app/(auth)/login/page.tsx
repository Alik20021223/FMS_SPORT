'use client'
import Link from "next/link";
import { useState } from "react";
import { Fsmb } from "./fsmb";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

interface FormData {
    login: string;
}

export default function Login() {
    const router = useRouter()
    const [login, setLogin] = useState<string>(''); // Указываем явно тип для login
    const [password, setPassword] = useState<string>(''); // Указываем явно тип для login

    useEffect(() => {
        if (localStorage.getItem(btoa('token'))) {
            return router.push('/profile')
        }
    }, [])
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post( '/api/login', {email: login, password: password}).then((res: any) => {
            localStorage.setItem(btoa('token'), res.data.token);
            router.push('/profile')
        });
    };

    return (
        <section className="loginSection">
            <div className="pr-[50px] pl-[44px] flex gap-[50px]">
                <Fsmb/>
                <div className="px-[127px] bg-[#EEEEEE] rounded-[10px] border-2 border-[#155783] pt-[51px] pb-[73px] mt-[240px] ">
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center relative">
                        <label >
                            <p className="text-[#155783] text-[12px] font-medium">Логин</p>
                            <input
                                type="text"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                className="hover:border-cyan-500 hover:border-2 border w-[239px] h-[37px] border-gray-400"
                            />
                        </label>
                        <div className="h-5"></div>
                        <label className="mb-[56px]">
                            <p className="text-[#155783] text-[12px] font-medium">Пароль</p>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="hover:border-cyan-500 hover:border-2 border w-[239px] h-[37px] border-gray-400"
                            />
                        </label >
                        <button className="bg-[#155783] py-[11px] w-[239px] uppercase rounded-full font-semibold text-white">Войти</button>
                    </form>
                    <Link className="text-[#155783] text-[11px] absolute mt-[42px] ml-[218px] mr-[18px]" href="/registration">ЗАРЕГИСТРИРОВАТЬСЯ</Link>
                </div>
            </div>
            
        </section>
    );
}
