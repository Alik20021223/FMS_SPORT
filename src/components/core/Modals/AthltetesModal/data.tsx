import { TColumn } from "@/components/tourneyCom/applyTourney";

export const columns: TColumn[] = [
    {
        key: "name",
        label: "Номинация",
    },
    {
        key: "rate",
        label: "Рейтинг",
    },
    {
        key: "rateGame",
        label: "побед / поражений / ничья",
    },
    {
        key: "action",
        label: "",
    },
];

export const user = {
    userData: {
        town: 'Брянск',
        club: 'Кветунь',
        coach: 'Петр Петров',
    },
    person: {
        email: 'Ivan Ivanov',
        surname: 'Иванов',
        name: 'Иван',
        patronymic: 'Иванович',
        createdAt: '12.04.1995',
    },
    family: [
        {
            fullName: 'Саша',
            person: 'Сын',
            imgSrc: '/assets/img/SonImg.svg',
        },
        {
            fullName: 'Ира',
            person: 'Дочь',
            imgSrc: '/assets/img/SonImg.svg',
        },
    ],
    achievement: {
        data: [
            {
                id: 1,
                name: 'Щит и меч',
                rate: 1,
                rateGame: '12/1/6',
                action: true,
            },
            {
                id: 2,
                name: 'Сабля',
                rate: 3,
                rateGame: '2/1/1',
                action: true,
            },
        ],
        dataTour: [
            {
                id: 1,
                tour: 'Турнир 3-х',
                name: 'Щит и меч',
                rate: 1,
                date: '22.06.2022',
            },
            {
                id: 2,
                tour: 'Три богатыря',
                name: 'Сабля',
                rate: 3,
                date: '14.01.2022',
            },
        ]
    },
    anthropometry: {
        age: 1994,
        weight: 70,
        height: 172,
        head: 32,
    }
}

export const tabs: string[] = ['Персональные данные', 'Антропометрия', 'Семья', 'Достижения', 'Клуб'];

