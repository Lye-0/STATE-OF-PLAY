'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as CeramicRegisterTableProps };
/** 丸い器と直線のセルを分ける。 */
export default function CeramicRegisterTable(props:TableProps) {
 return <TableView {...props} skin="ceramic-register-table" />;
}
