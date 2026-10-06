'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ColumnBayTableProps };
/** 細い縦の仕切りで項目を区画し、行の順序を保ったまま比較する。 */
export default function ColumnBayTable(props:TableProps) {
 return <TableView {...props} skin="column-bay-table" />;
}
