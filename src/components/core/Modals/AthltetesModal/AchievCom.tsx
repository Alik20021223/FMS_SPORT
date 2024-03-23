import React from 'react'
import { AchievementCom } from '../../AchievementCom/AchievementCom'
import { TournamentCom } from '../../AchTourCom/Tournament'

export const AchievCom = ({data, dataTour}: any) => {
    return (
        <div>
            <AchievementCom data={data} />
            <div className='mt-10'>
                <TournamentCom data={dataTour} />
            </div>
        </div>
    )
}
