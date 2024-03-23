import React, { FC, ReactNode } from 'react';

type TIfProps = {
  condition: any;
  children: ReactNode;
}

export const If: FC<TIfProps> = ({ condition, children }) => (!!condition ? <>{children}</> : null);
