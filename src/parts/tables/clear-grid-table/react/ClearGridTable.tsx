'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ClearGridTableProps };
/** Reviewラベルを明暗で判別できる配色に変更。 */
export default function ClearGridTable(props:TableProps) {
 return <TableView {...props} skin="clear-grid-table" />;
}
