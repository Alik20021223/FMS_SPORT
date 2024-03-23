import React from 'react'
import SettingCheckBox from '@/components/core/SettingsInput/SettingCheckBox'
import { SettingCheck } from '@/components/core/SettingsInput/SettingCheckBox'

const sendNotification: SettingCheck = {
    txt: 'Получать уведомления на почту',
};
const changeBgColor: SettingCheck = {
    txt: 'Изменить цвет фона',
};
const changeTxtColor: SettingCheck = {
    txt: 'Изменить цвет текста',
};
const changeSizeTxt: SettingCheck = {
    txt: 'Изменить размер текста',
};

export default function TheSetting() {
  return (
    <div>
        <div className='mb-[52px]'>
            <h1 className='font-bold ml-14 mb-[173px] text-2xl leading-7'>Настройки</h1>
            <SettingCheckBox txt={sendNotification.txt}/>
        </div>
        <div>
            <h1 className='ml-4 mb-[19px]'>Для слабовидящих</h1>
            <div className='mb-[15px]'>
                <SettingCheckBox txt={changeBgColor.txt}/>
            </div>
            <div className='mb-[15px]'>
                <SettingCheckBox txt={changeTxtColor.txt}/>
            </div>
            <div className='mb-[15px]'>
                <SettingCheckBox txt={changeSizeTxt.txt}/>
            </div>
        </div>
    </div>
  )
}
