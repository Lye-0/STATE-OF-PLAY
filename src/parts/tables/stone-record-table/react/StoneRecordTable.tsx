'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as StoneRecordTableProps };
/** 石の区切りをデータ行の台座にする。 */
export default function StoneRecordTable(props:TableProps) {
 return <TableView {...props} skin="stone-record-table" />;
}
