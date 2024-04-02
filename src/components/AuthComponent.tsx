'use client';
import { checkToken, logout, setUser } from '@/redux/features/fsmbSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
    children?: React.ReactNode;
};

export const AuthWrapper = ({ children }: Props) => {
    const dispatch = useAppDispatch();
    const { push } = useRouter();

    const token = useAppSelector(state => state.personal.token);
    const [isLoading, setIsLoading] = useState(true)

    // if the user doesnt have a valid token, redirect to login page
    useEffect(() => {
        dispatch(checkToken());
        if (!localStorage.getItem(btoa('token'))) {
            push('/login');
            // will explain this in a moment
            dispatch(logout());
        } else {

            axios.get('/api/me', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
                }
            }).then((res: any) => {
                dispatch(setUser(res.data));
                setIsLoading(false)
            })

        }
    }, [token, push]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return children;
};