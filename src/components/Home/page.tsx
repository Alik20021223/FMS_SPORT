'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import '@/components/AuthGuard/loader.css'
export default function Home() {
    const router = useRouter();
    useEffect(()=> {
        if(localStorage.getItem(btoa('token'))) router.push('/profile');
        else router.push('/login')
    }, [])
    
    return (
        <>
            <div className='flex w-screen h-screen items-center justify-center'>
                <div className="loader"></div>
            </div>
        </>
    )
}