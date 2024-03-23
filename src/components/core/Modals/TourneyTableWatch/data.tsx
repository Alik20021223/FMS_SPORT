export type TRowContinue = {
    id: number;
    name: string;
    dateAt: string;
    type: string;
    placeAt: string;
    action: boolean;
    watch?: boolean;
    connect?: boolean;
    undefined?: boolean;
};

export type TRowEnd = {
    id: number;
    name: string;
    dateAt: string;
    type: string;
    placeAt: string;
    action: boolean;
    watch?: boolean;
    undefined?: boolean;
};

type TColumn = {
    key: string;
    label: string;
};

export const rowsContinue: TRowContinue[] = [
    {
        id: 1,
        name: "Турнир 3-х",
        dateAt: "14.01.2023",
        type: "Сабля",
        placeAt: "Москва спортзал Херо",
        action: true,
        watch: true,
    },
    {
        id: 2,
        name: "Турнир 3-х",
        dateAt: "14.01.2023",
        type: "Сабля",
        placeAt: "Москва спортзал Херо",
        action: true,
        connect: true,
    },
    {
        id: 3,
        name: "Турнир 3-х",
        dateAt: "14.01.2023",
        type: "Сабля",
        placeAt: "Москва спортзал Херо",
        action: true,
        undefined: true,
    },
];

export const columns: TColumn[] = [
    {
        key: "name",
        label: "Турнир",
    },
    {
        key: "dateAt",
        label: "Дата",
    },
    {
        key: "type",
        label: "Номинация",
    },
    {
        key: "placeAt",
        label: "Место поведение",
    },
    {
        key: "action",
        label: "",
    },
];

export const rowsEnd: TRowEnd[] = [
    {
        id: 1,
        name: "Турнир 3-х",
        dateAt: "14.01.2023",
        type: "Сабля",
        placeAt: "Москва спортзал Херо",
        action: true,
        watch: true,
    },
    {
        id: 3,
        name: "Турнир 3-х",
        dateAt: "14.01.2023",
        type: "Сабля",
        placeAt: "Москва спортзал Херо",
        action: true,
        undefined: true,
    },
];
