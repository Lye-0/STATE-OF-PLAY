'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as CeramicRegisterTableProps };
/** 磁器の表題面から平らな数表へ移る。 */
export default function CeramicRegisterTable(props:TableProps) {
 return <TableView {...props} skin="ceramic-register-table" />;
}
