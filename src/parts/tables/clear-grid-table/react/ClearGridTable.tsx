'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as ClearGridTableProps };
/** 列と行の境界が明快な表。 */
export default function ClearGridTable(props:TableProps) {
 return <TableView {...props} skin="clear-grid-table" />;
}
