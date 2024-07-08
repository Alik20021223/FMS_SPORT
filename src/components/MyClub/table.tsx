'use client'
import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { rows, columns } from './data';

const tableClassName = {
    thead: ["text-default-500", 'border-[#C0C0C0]', "rounded-[20px]", ],
}

export const ClubTable = () => {
    return (
        <div>
            <div className="flex flex-col gap-3">
                <Table
                    classNames={tableClassName}
                >
                    <TableHeader  columns={columns}>
                        {(column) => <TableColumn className='py-8 pl-[28px] bg-[#F5F5F5]' key={column.uid}>{column.name}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={item.number}>
                                {(columnKey) => {
                                    return (
                                        <TableCell className='pl-[28px]'>
                                            {getKeyValue(item, columnKey)}
                                        </TableCell>
                                    );
                                }}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
