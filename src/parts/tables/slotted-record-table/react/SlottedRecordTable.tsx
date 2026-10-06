'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as SlottedRecordTableProps };
/** 列の読取りを浅い溝へ入れ、見出しを低い装置の面として揃える。 */
export default function SlottedRecordTable(props:TableProps) {
 return <TableView {...props} skin="slotted-record-table" />;
}
