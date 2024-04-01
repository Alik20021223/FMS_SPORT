import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';



export const FAppDetails = ({ data }: any) => {
    const [family, setFamily] = useState<any[]>([])
    
    useEffect(() => {
        data.forEach((item: any) => {
            axios.get('http://localhost:3020/api/user/' + item?.member, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem(btoa('token'))
                }
            }).then((res: any) => {
                if (!family.find(it => it.fullName === `${res.data?.surname} ${res.data?.name}`)) {
                    setFamily([...family, { imgSrc: '/assets/img/user-avatar.png', fullName: `${res.data?.surname} ${res.data?.name}`, person: item?.relation }])
                }
            })
        });
    }, [])
    
return (
    <dl>
        {family.map((familyMember: any) => (
            <div key={familyMember?.fullName} className='flex items-center rounded-[20px] bg-bgColor w-full mb-5 ' >
                <div className='py-[10px] ml-4 mr-6'>
                    <div>
                        <Image
                            src={familyMember.imgSrc}
                            alt={familyMember.person}
                            width={50} height={50}
                            className='object-cover rounded-full border-2 border-prime'
                        />
                    </div>
                </div>
                <div >
                    <p className='text-base font-medium'>{familyMember.fullName}</p>
                    <p className='text-sm font-medium text-[#C0C0C0]'>{familyMember.person}</p>
                </div>
            </div>
        ))}
    </dl>
);
};
