import Image from 'next/image'
import React from 'react'

export const FamilyCom = ({data}: any) => {
    return (
        <div>
            {data.map((familyMember: any) => (
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
        </div>
    )
}
