'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as LedgerTableProps };
/** 罫線と活版の文字を使い、並べ替えた列に細いインク線が伸びる帳簿。 */
export default function LedgerTable(props:TableProps) {
 return <TableView {...props} skin="ledger-table" />;
}
