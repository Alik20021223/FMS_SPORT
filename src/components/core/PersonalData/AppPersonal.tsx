import Image from 'next/image';

export type PersonalData = {
    imgSrc: string;
    fullName: string;
    person: string;
    pNumber: number
};

type PAppPersonProps = {
    data: PersonalData[];
};

export const PAppDetails = ({ data }: PAppPersonProps) => {
    return (
        <dl>
            {data.map((personalData) => (
                <div key={personalData.fullName} className='flex justify-between items-center rounded-[20px] bg-bgColor w-[651px] py-4 mb-5 ' >
                    <div className='flex'>
                        <div className='ml-4 mr-6 px-[10px] py-[10px] rounded-md bg-[#D9D9D9]'>
                            <Image
                                src={personalData.imgSrc}
                                alt={personalData.person} 
                                width={20} height={20}
                                className='object-center'
                            />
                        </div>
                        <div >
                            <p className='text-base font-medium'>{personalData.fullName}</p>
                            <p className='text-sm font-medium text-[#C0C0C0]'>{personalData.person}</p>
                        </div>
                    </div>
                    <div className='pr-[25px]'>
                        <p>{personalData.pNumber}</p>
                    </div>
                </div>
            ))}
        </dl>
    );
};
