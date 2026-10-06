'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as MarginLedgerTableProps };
/** 行の左側に広い読取余白を置き、列の境界を細い垂線で示す。 */
export default function MarginLedgerTable(props:TableProps) {
 return <TableView {...props} skin="margin-ledger-table" />;
}
