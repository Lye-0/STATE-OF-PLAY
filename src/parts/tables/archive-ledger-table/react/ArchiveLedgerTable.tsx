'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ArchiveLedgerTableProps };
/** 資料台帳の綴じ目と列罫線。 */
export default function ArchiveLedgerTable(props:TableProps) {
 return <TableView {...props} skin="archive-ledger-table" />;
}
