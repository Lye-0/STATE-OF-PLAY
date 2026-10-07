'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as PlainRecordsTableProps };
/** 業務データを読みやすく並べる。 */
export default function PlainRecordsTable(props:TableProps) {
 return <TableView {...props} skin="plain-records-table" />;
}
