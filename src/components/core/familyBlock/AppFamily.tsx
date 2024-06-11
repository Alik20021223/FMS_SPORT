import { useAppSelector } from '@/redux/hooks';
import { Button } from '@nextui-org/react';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';



export const FAppDetails = ({ data }: any) => {
    const user = useAppSelector(state => state.personal)
    const [family, setFamily] = useState<any[] | null>(user.relatives)

    const [apply, setApply] = useState<boolean>(false)

    const req = false


    return (
        <dl>
            {family
                ? family.map((familyMember: any) => (
                    <div key={familyMember?.id} className='flex items-center rounded-[20px] bg-bgColor w-full justify-between px-5 py-2.5' >
                        <div className='flex space-x-5'>
                            <div>
                                <Image
                                    src={"/static/" + familyMember.photo}
                                    alt={familyMember.name}
                                    width={50} height={50}
                                    className='object-cover rounded-full border-2 border-prime'
                                />
                            </div>
                            <div >
                                <p className='text-base font-medium'>{familyMember.surname} {familyMember.name} {familyMember.patronymic}</p>
                                <p className='text-sm font-medium text-[#C0C0C0]'>{familyMember.relationship}</p>
                            </div>
                        </div>
                        {!apply && <div className='space-x-2.5'>
                            <Button color='primary' onClick={() => setApply(true)}>Принять</Button>
                            <Button color='danger' onClick={() => setFamily(null)}>Отклонить</Button>
                        </div>
                        }
                        {req && <h1>Запрос отправлен</h1>}
                    </div>
                ))
                : (<></>)
            }
        </dl>
    );
};
