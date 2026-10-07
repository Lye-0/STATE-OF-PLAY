'use client';
import React from 'react';
import {TableView,type TableProps} from '../../../../shared/workbench/table-view';
import '../styles.css';
export type { TableProps as RailDatasetTableProps };
/** データ列を二本のレールに収める。 */
export default function RailDatasetTable(props:TableProps) {
 return <TableView {...props} skin="rail-dataset-table" />;
}
