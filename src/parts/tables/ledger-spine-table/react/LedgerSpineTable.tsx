'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as LedgerSpineTableProps };
/** 太い綴じ帯と細い本文罫で、記録の行と項目を正確に結ぶ。 */
export default function LedgerSpineTable(props:TableProps) {
 return <TableView {...props} skin="ledger-spine-table" />;
}
