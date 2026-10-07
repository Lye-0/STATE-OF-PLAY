'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as StoneRecordTableProps };
/** 石板のヘッダーと静かな行。 */
export default function StoneRecordTable(props:TableProps) {
 return <TableView {...props} skin="stone-record-table" />;
}
