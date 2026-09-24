'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as RibbonLedgerProps };
/** 列のタブと選択行の折り返しを持つ、紙のリボンを使った一覧。 */
export default function RibbonLedger(props:TableProps) {
 return <TableView {...props} skin="ribbon-ledger" />;
}
