'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ReceiptRegisterTableProps };
/** 受領票の件数とデータ列を罫線で分離。 */
export default function ReceiptRegisterTable(props:TableProps) {
 return <TableView {...props} skin="receipt-register-table" />;
}
