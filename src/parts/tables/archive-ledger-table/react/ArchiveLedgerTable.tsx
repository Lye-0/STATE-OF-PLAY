'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ArchiveLedgerTableProps };
/** 資料の背とデータの読取面を分離。 */
export default function ArchiveLedgerTable(props:TableProps) {
 return <TableView {...props} skin="archive-ledger-table" />;
}
