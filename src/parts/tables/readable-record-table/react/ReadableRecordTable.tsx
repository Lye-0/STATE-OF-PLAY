'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ReadableRecordTableProps };
/** 長い名称と数値の列を落ち着いて読み、必要な行だけを選べる実用的な表。 */
export default function ReadableRecordTable(props:TableProps) {
 return <TableView {...props} skin="readable-record-table" />;
}
