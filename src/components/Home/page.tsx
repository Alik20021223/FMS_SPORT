'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    useEffect(()=> {
        if(localStorage.getItem(btoa('token'))) console.log('Hello');
        else router.push('/login')
    }, [])
    
    return (
        <>
            <h1>Загрузка....</h1>
        </>
    )
}