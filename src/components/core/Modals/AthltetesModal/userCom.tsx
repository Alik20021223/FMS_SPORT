import React from 'react'
import BlockArrow from '@/components/core/BlockArrow/BlockArrow'

export const UserCom = ({ props }: any) => {
    return (
        <div>
            <BlockArrow
                img={"/assets/img/iconPers/location.svg"}
                label={"Город"}
                value={props.town}
            />
            <BlockArrow
                img={"/assets/img/iconPers/swords.svg"}
                label={"Клуб"}
                value={props.club}
            />
            <BlockArrow
                img={"/assets/img/iconPers/coach.svg"}
                label={"Тренер"}
                value={props.coach}
            />
        </div>
    )
}
