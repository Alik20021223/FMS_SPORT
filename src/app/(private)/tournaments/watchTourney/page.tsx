import React, { FC } from 'react'
import { Button, Input } from "@nextui-org/react";
import { Participant, TableTourney } from '@/components/core/TableTourneyWatch/TableTourney';



// type TAddModal = {
//     data?: any;
// };

const participants: Participant[] = [
    { id: 1, name: 'Иванов' },
    { id: 2, name: 'Петров' },
    { id: 3, name: 'Сидоров' },
    { id: 4, name: 'Кузьмин' },
];


const WatchTourney = () => {
    return (
        <div className='w-[50%] rounded-lg bg-[#EEEEEE] h-full'>
            <div className='pt-[20px] pl-[4%] pr-[10%]'>
                Просмотр турнира

                <div className='flex justify-end'>
                    <Button className='bg-prime w-[30%] text-white hover:bg-prime-800'>
                        Вывести на экран
                    </Button>
                </div>

                <div className='w-[50%] mt-6 mb-10 flex gap-5 flex-col'>
                    <div className='w-full'>
                        <Input isReadOnly type='text' label='Название' value='Турнир 3-х' labelPlacement='outside' />
                    </div>
                    <div className='w-full'>
                        <Input isReadOnly type='text' label='Номинация' value='Щит и меч' labelPlacement='outside' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='w-full'>
                        <div className='w-[100%]'>
                            <TableTourney participants={participants} />
                        </div>
                    </div>

                    <div className='flex mt-10 pb-5 flex-col items-end'>
                        <div className='mr-20'>Победители</div>
                        <div className='mt-4 text-left'>
                            <p className='mb-2'>1 место - <span>Иванов</span></p>
                            <p className='mb-2'>2 место - <span>Петров</span></p>
                            <p className='mb-2'>3 место - <span>Сидоров</span></p>
                            <p className='mb-2'>4 место - <span>Кузьмин</span></p>
                        </div>
                        <Button className='bg-red-600 w-[30%] mt-6 text-white hover:bg-prime-800'>
                            Завершить турнир
                        </Button>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default WatchTourney