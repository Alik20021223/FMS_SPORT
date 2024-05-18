'use client';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react'
import React, { FC, ReactNode, useCallback } from 'react'


type TTableCol = {
  key: string;
  label: string;
}

type TAppTable = {
  cols: TTableCol[]
  rows: Record<string, any>[]
  onAction?: (action?: any) => ReactNode
  onClickRow?: (data?: any) => void
  tableClass?: string
  tableClassPy?: string
}

export const AppTable: FC<TAppTable> = ({ cols, rows, onAction, tableClass, onClickRow, tableClassPy }) => {

  const renderCell = useCallback((item: any, columnKey: React.Key) => {
    const cellValue = getKeyValue(item, columnKey)

    switch (columnKey) {
      case 'action':
        return onAction ? onAction(item) : cellValue;
      default:
        return cellValue
    }
  }, [])


  return (
    <>
      <Table
        aria-label="custom component"
        classNames={{
          wrapper: ["max-h-[382px]", "w-full", 'p-0', 'flex-1', "shadow-none", "bg-transparent"],
          tr: ['bg-bgColor'],
          th: [
            'text-center', 'first:text-start', 'border-prime', tableClass ?? 'px-6', tableClassPy ?? 'py-3', 'text-prime', 'border-t-2 border-b-2', 'first:rounded-l-[20px]', 'first:border-l-2', 'last:rounded-r-[20px]', 'last:border-r-2', tableClassPy && 'text-[16px]', tableClassPy && 'font-md',
          ],
          td: ['whitespace-nowrap', tableClass ?? 'px-6', tableClassPy ?? 'py-3', 'text-center', 'first:text-start', 'border-t-2 border-b-2', 'first:rounded-l-[20px]', 'first:border-l-2', 'last:rounded-r-[20px]', 'last:border-r-2', tableClassPy && 'text-[16px]', tableClassPy && 'font-md'],
          table: [
            'table', 'border-separate', 'border-spacing-0', 'overflow-hidden'
          ],
        }}
        className={`${tableClassPy && 'text-[16px] font-medium'} bg-transparent`}
      >
        <TableHeader columns={cols}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow
              key={item?.id || item.indexId}
              className={`${item.status === 'Заявка' ? 'text-red-500' : ''} ${(item.change === true || onClickRow) && 'cursor-pointer'}`}
            >
              {(columnKey) => (
                <TableCell onClick={() => onClickRow && onClickRow(item)}>
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>

      </Table>
    </>
  )
}