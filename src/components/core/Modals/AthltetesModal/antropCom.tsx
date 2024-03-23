import React from 'react'
import BlockArrow from '../../BlockArrow/BlockArrow'

export const AntropCom = ({ anthropometry }: any) => {
    console.log(anthropometry)
    return (
        <div>
            <BlockArrow
                img={"/assets/img/iconPers/age.svg"}
                value={"Полных лет"}
                label={"Возраст"}
                rightValue={new Date().getFullYear() - new Date(anthropometry?.age).getFullYear()}
                isEditable={false}
            />
            <BlockArrow
                img={"/assets/img/iconPers/height.svg"}
                value={"кг"}
                label={"Вес"}
                rightValue={anthropometry?.weight}
                isEditable={false}
            />
            <BlockArrow
                img={"/assets/img/iconPers/weight.svg"}
                value={"см"}
                label={"Рост"}
                rightValue={anthropometry?.height}
                isEditable={false}
            />
            <BlockArrow
                img={"/assets/img/iconPers/head.svg"}
                value={"см"}
                label={"Окружность головы"}
                rightValue={anthropometry?.head}
                isEditable={false}
            />
        </div>
    )
}
