import { TColumn } from '@/components/tourneyCom/applyTourney'

export const myClub = {
    LogoInfo: {
        logoImg: '/assets/img/logoClub.png',
        nameClub: 'Кветунь',
        cityClub: 'г.Брянск'
    },
    infoClub: [
        {
            id: 1,
            value: 'Адресс',
            txt: 'г. Брянск, ул. 22 съезда КПСС, д. 74',
        },
        {
            id: 2,
            value: 'Дата основания',
            txt: '22 октября 2018 года',
        },
        {
            id: 3,
            value: 'Наличие акредитации',
            txt: 'Есть акредитация',
        },
        {
            id: 4,
            value: 'Телефон',
            txt: '+7 (953) 283-94-63',
        },
        {
            id: 5,
            value: 'Почта',
            txt: 'kvetun_fsmb@fsmb.ru',
        },
        {
            id: 6,
            value: 'Глава Клуба',
            txt: 'Павлов Юрий Михайлович',
        },
    ],
    Description: {
        dateWork: 'Суббота, Воскресенье',
        firstGroup: 'Группа 6-8 лет с 12.00 до 13.00',
        secondGroup: 'Группа 12+ с 14.00 до 15.00',
        sportSection: 'Спорт-клуб "Ямма"',
    },
    clubAthletes: [
        {
            id: 1,
            count: 1,
            fio: 'Иванов Иван Иванович',
            dateBirth: '21.11.2000',
            status: 'Глава'
        },
        {
            id: 2,
            count: 2,
            fio: 'Иванов Иван Иванович',
            dateBirth: '21.11.2000',
            status: 'Казначей'
        },
        {
            id: 3,
            count: 3,
            fio: 'Иванов Иван Иванович',
            dateBirth: '21.11.2000',
            status: 'Тренер'
        },
        {
            id: 4,
            count: 4,
            fio: 'Иванов Иван Иванович',
            dateBirth: '21.11.2000',
            status: 'Секретарь'
        },
        {
            id: 5,
            count: 5,
            fio: 'Иванов Иван Иванович',
            dateBirth: '21.11.2000',
            status: 'Спортсмен'
        },
        {
            id: 6,
            count: 6,
            fio: 'Иванов Иван Иванович',
            dateBirth: '21.11.2000',
            status: 'Заявка'
        },
    ]
}

export const columns: TColumn[] = [
    {
        key: "id",
        label: "№",
    },
    {
        key: "full_name",
        label: "ФИО",
    },
    {
        key: "birth",
        label: "Дата Рождения",
    },
    {
        key: "status",
        label: "Статус",
    },
    {
        key: "role",
        label: "Роль",
    },
];