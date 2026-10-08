'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ArchiveLedgerTableProps };
/** 保管帳簿のデータ。左の背と上の索引を持ち、表の行は細い横罫で読みやすく固定する。 */
export default function ArchiveLedgerTable(props:TableProps) {
 return <TableView {...props} skin="archive-ledger-table" />;
}
