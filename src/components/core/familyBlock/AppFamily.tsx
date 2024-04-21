import { useAppSelector } from '@/redux/hooks';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';



export const FAppDetails = ({ data }: any) => {
    const user = useAppSelector(state => state.personal)
    const [family, setFamily] = useState<any[] | null>(user.relatives)



    return (
        <dl>
            {family
                ? family.map((familyMember: any) => (
                    <div key={familyMember?.id} className='flex items-center rounded-[20px] bg-bgColor w-full mb-5 ' >
                        <div className='py-[10px] ml-4 mr-6'>
                            <div>
                                <Image
                                    src={"/static/" + familyMember.photo}
                                    alt={familyMember.name}
                                    width={50} height={50}
                                    className='object-cover rounded-full border-2 border-prime'
                                />
                            </div>
                        </div>
                        <div >
                            <p className='text-base font-medium'>{familyMember.surname} {familyMember.name} {familyMember.patronymic}</p>
                            <p className='text-sm font-medium text-[#C0C0C0]'>{familyMember.relationship}</p>
                        </div>
                    </div>
                ))
                : (<></>)
            }
        </dl>
    );
};
