'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ReceiptRegisterTableProps };
/** 受領票の記録一覧。件数を控えとして見出しへ揃え、検索・表・ページ操作をミシン目で区切る。 */
export default function ReceiptRegisterTable(props:TableProps) {
 return <TableView {...props} skin="receipt-register-table" />;
}
