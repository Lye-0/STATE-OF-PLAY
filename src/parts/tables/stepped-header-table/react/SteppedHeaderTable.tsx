'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as SteppedHeaderTableProps };
/** 見出しの段とデータの面を分け、記録を安定した線で読む。 */
export default function SteppedHeaderTable(props:TableProps) {
 return <TableView {...props} skin="stepped-header-table" />;
}
