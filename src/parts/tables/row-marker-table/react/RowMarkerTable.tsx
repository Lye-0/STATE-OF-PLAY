'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as RowMarkerTableProps };
/** 選択行に短い位置印を置き、長いデータ表でも読取位置を失わない。 */
export default function RowMarkerTable(props:TableProps) {
 return <TableView {...props} skin="row-marker-table" />;
}
