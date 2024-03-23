'use client';
import React, { FC, ReactNode, useCallback } from 'react'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react'

type TTableCol = {
    key: string;
    label: string;
}

type TAppTable = {
    cols: TTableCol[]
    rows: Record<string, any>[]
    onClickRow?: (data?: any) => void
}

export const TableAthletes: FC<TAppTable> = ({ cols, rows, onClickRow, }) => {


    return (
        <Table
            aria-label="custom component"
            classNames={{
                wrapper: ["max-h-[382px]", "w-full", 'p-0', 'flex-1', "shadow-none"],
                tr: ['bg-bgColor'],
                th: [
                    'text-center', 'first:text-start', 'px-6', 'py-6', 'border-t-2 border-b-2', 'first:rounded-l-[20px]', 'first:border-l-2', 'last:rounded-r-[20px]', 'last:border-r-2', 'text-[16px]', 'font-md'
                ],
                td: ['whitespace-nowrap', 'px-6', 'py-3', 'text-center', 'first:text-start', 'border-t-2 border-b-2', 'first:rounded-l-[20px]', 'first:border-l-2', 'last:rounded-r-[20px]', 'last:border-r-2', 'text-[15px]', 'font-md'],
                table: [
                    'table', 'border-separate', 'border-spacing-0', 'overflow-hidden'
                ],
            }}
        >
            <TableHeader columns={cols}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows} >
                {(item) => (
                    <TableRow key={item?.id || item.indexId} className={`${onClickRow && `cursor-pointer`}`}>
                        {(columnKey) => <TableCell onClick={() => onClickRow && onClickRow(item)}>
                            {getKeyValue(item, columnKey)}
                        </TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}
