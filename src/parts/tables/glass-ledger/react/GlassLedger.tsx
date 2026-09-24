'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as GlassLedgerProps };
/** 一枚の透明な台帳。選択する行に薄いガラスの層が現れる。 */
export default function GlassLedger(props:TableProps) {
 return <TableView {...props} skin="glass-ledger" />;
}
