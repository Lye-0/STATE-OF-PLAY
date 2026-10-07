'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ReceiptRegisterTableProps };
/** 集計票の切り取り線と合計欄。 */
export default function ReceiptRegisterTable(props:TableProps) {
 return <TableView {...props} skin="receipt-register-table" />;
}
